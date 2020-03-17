/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import path from 'path';

import { Gallery } from './Gallery.jsx';
import Viewer from './Viewer.jsx';

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
      showViewer: false
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
        this.setState({ place: response.data });
      })
      .catch((err) => { });
  }

  clickHandler() {
    return null;
  }

  render() {
    return (
      <div id="container">
        <Gallery place={this.state.place} />
        <Viewer show={this.state.showViewer} place={this.state.place} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
