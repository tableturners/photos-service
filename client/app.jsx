/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import path from 'path';

import Gallery from './Gallery.jsx';
import Viewer from './Viewer.jsx';

const testUrl = 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg';
const testPlace = {
    _id: 1,
    name: 'test',
    photos_food: [testUrl, testUrl, testUrl, testUrl, testUrl, testUrl],
    photos_building: [testUrl, testUrl, testUrl],
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        _id: undefined,
        name: '',
        photos_food: [],
        photos_building: []
      },
      showViewer: false,
      selected: [ null, null ]
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  // makes API call with random restaurant ID between 1-100
  componentDidMount() {
    this.getPlace(Math.floor(Math.random() * 100));
  }

  getPlace(id) {
    return axios.get('/photos/?id=' + id)
      .then(response => {
        this.setState({ place: response.data }, () => console.log(this.state));
      })
      .catch((err) => { });
  }

  clickHandler(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.src);
    return null;
  }

  render() {
    return (
      <div id="container">
        <Gallery place={testPlace} clickHandler={this.clickHandler} />
        <Viewer show={this.state.showViewer} selected={this.state.selected} place={this.state.place} />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
