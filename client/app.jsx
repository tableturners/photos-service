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
    let id = Math.floor(Math.random() * 100);
    console.log(id);
    axios.get('/photos/?id=' + id)
      .then((response) => {
        console.log(response.data);
        this.setState(response.data);
      })
      .catch();
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}'s Photos</h1>
        <div id="photos_food">
          <h2>photos_food</h2>
          {this.state.photos_food.map((url) => <img src={url}/>)}
        </div>
        <div id="photos_building">
          <h2>photos_building</h2>
          {this.state.photos_building.map((url) => <img src={url}/>)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
