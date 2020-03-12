/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import path from 'path';
// import Photo from './components/Photo.jsx';

console.log('hello tester');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: '',
      photos_food: [],
      photos_building: []
    };
  }

  componentDidMount() {
    axios.get('/photos')
      .then((response) => {
        console.log(response.data);
        this.setState(response.data[Math.floor(Math.random() * 10)]);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}'s Photos</h1>
        <div id="photos_food">
          <h2>photos_food</h2>
          {this.state.photos_food.map((url) => <img src={url} crossOrigin="anonymous" />)}
        </div>
        <div id="photos_building">
          <h2>photos_building</h2>
          {this.state.photos_building.map((url) => <img src={url} crossOrigin="anonymous" />)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
