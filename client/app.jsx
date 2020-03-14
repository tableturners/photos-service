/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import path from 'path';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: undefined,
      name: '',
      photos_food: [],
      photos_building: []
    };
  }

  // makes API call with random restaurant ID between 1-100
  componentDidMount() {
    this.getPlace(Math.floor(Math.random() * 100));
  }

  getPlace(id) {
    return axios.get('/photos/?id=' + id)
      .then(response => {
        this.setState(response.data);
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}'s Photos</h1>
        <div id="photos_food">
          <h1>photos_food</h1>
          {this.state.photos_food.map(url => <img src={url}/>)}
        </div>
        <div id="photos_building">
          <h1>photos_building</h1>
          {this.state.photos_building.map(url => <img src={url}/>)}
        </div>
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
