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
    this.ViewerRef = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }

  // calls getPlace with random id in [0, 99], adds keydown listener
  componentDidMount() {
    this.getPlace(Math.floor(Math.random() * 100));
  }

  // given input id, makes GET request to server and sets state.place equal to response
  getPlace(id) {
    return axios.get(`/api/photos/${id}`)
      .then((response) => {
        this.setState({ place: response.data });
      })
      .catch(() => {});
  }

  // captures Gallery click event and updates Viewer state
  clickHandler(event) {
    this.setState({
      showViewer: true,
      currentIndex: Number(event.target.id.split('-')[1])
    }, () => this.ViewerRef.current.updateState(this.state));
  }

  render() {
    return (
      <div id="container">
        <Gallery
          place={this.state.place}
          clickHandler={this.clickHandler}
        />
        <Viewer ref={this.ViewerRef} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('photos'));
export default App;
