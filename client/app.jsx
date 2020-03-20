import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Gallery from './Gallery.jsx';
import Viewer from './Viewer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        _id: 0,
        pics: [],
        name: ''
      },
      showViewer: false,
      currentIndex: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  // calls getPlace with random id in [0, 99], adds keydown listener
  componentDidMount() {
    this.getPlace(Math.floor(Math.random() * 100));
    document.addEventListener('keydown', this.keypressHandler.bind(this));
  }

  // given input id, makes GET request to server and sets state.place equal to response
  getPlace(id) {
    return axios.get(`/photos/?id=${id}`)
      .then((response) => {
        this.setState({ place: response.data }, () => console.log(this.state));
      })
      .catch(() => {});
  }

  // captures Gallery click events and opens Viewer
  clickHandler(event) {
    this.setState({ showViewer: true, currentIndex: Number(event.target.id.split('-')[1]) });
  }

  // captures "button" image clicks in Viewer
  buttonHandler(event) {
    const eventId = event.target.id;
    if (eventId === 'left-arrow') {
      this.advanceDisplay('left');
    } else if (eventId === 'right-arrow') {
      this.advanceDisplay('right');
    } else if (eventId === 'close-button') {
      this.setState({ showViewer: false });
    } else if (eventId === 'viewer-background') {
      this.setState({ showViewer: false });
    }
  }

  // captures key presses in Viewer
  keypressHandler(event) {
    if (this.state.showViewer) {
      if (event.key === 'ArrowLeft') {
        this.advanceDisplay('left');
      } else if (event.key === 'ArrowRight') {
        this.advanceDisplay('right');
      } else if (event.key === 'Escape') {
        this.setState({ showViewer: false });
      }
    }
  }

  // changes displayed image in Viewer based on button/key presses
  advanceDisplay(string) {
    if (string === 'left' && this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else if (string === 'right' && this.state.currentIndex < this.state.place.pics.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  }

  render() {
    return (
      <div id="container">
        <Gallery
          place={this.state.place}
          clickHandler={this.clickHandler}
        />
        <Viewer
          show={this.state.showViewer}
          place={this.state.place}
          currentIndex={this.state.currentIndex}
          buttonHandler={this.buttonHandler}
        />
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
