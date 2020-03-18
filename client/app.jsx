/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import path from 'path';

import Gallery from './Gallery.jsx';
import Viewer from './Viewer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        _id: undefined,
        name: '',
        urls: [],
      },
      showViewer: false,
      currentIndex: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.keypressHandler = this.keypressHandler.bind(this);
    this.advanceDisplay = this.advanceDisplay.bind(this);
  }

  // makes API call with random restaurant ID between 0-99
  componentDidMount() {
    this.getPlace(Math.floor(Math.random() * 100));
  }

  getPlace(id) {
    return axios.get('/photos/?id=' + id)
      .then(response => {
        this.setState({ place: response.data });
      })
      .catch((err) => { });
  }

  clickHandler(event) {
    event.preventDefault();
    this.setState({ showViewer: true, currentIndex: Number(event.target.id.split('-')[1]) }, () => console.log(this.state));
  }

  buttonHandler(event) {
    event.preventDefault();
    let eventId = event.target.id;
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

  keypressHandler(event) {
    if (this.state.showViewer) {

    }
  }

  advanceDisplay(string) {
    if (string === 'left' && this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else if (string === 'right' && this.state.currentIndex < this.state.place.urls.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  }

  render() {
    return (
      <div id="container">
        <Gallery place={this.state.place} clickHandler={this.clickHandler} />
        <Viewer show={this.state.showViewer} place={this.state.place}
          currentIndex={this.state.currentIndex} buttonHandler={this.buttonHandler} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
