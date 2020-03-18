/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import path from 'path';

import Gallery from './Gallery.jsx';
import Viewer from './Viewer.jsx';

const testPlace = {
  _id: 1,
  name: 'test',
  urls: [
    'https://www.planetware.com/photos-large/F/eiffel-tower.jpg',
    'https://s3.amazonaws.com/crowdriff-media/full/b2c44bc8bc8d231f2189ba380e64c5bfa1940a778bd9f5a4dfc617bfc04b79bd.jpg',
    'https://www.history.com/.image/t_share/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg',
    'https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg',
    'https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    'https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg',
    'https://www.alimentarium.org/en/system/files/thumbnails/image/WEB-Carr%C3%A9-durian.png',
    'https://cdn.vox-cdn.com/thumbor/TGJMIRrhzSrTu1oEHUCVrizhYn0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13689000/instagram_egg.jpg',
    'https://cookieandkate.com/images/2018/05/baked-falafel-recipe.jpg']
}

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
      this.keypressHandler('left');
    } else if (eventId === 'right-arrow') {
      this.keypressHandler('right');
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
        <Gallery place={testPlace} clickHandler={this.clickHandler} />
        <Viewer show={this.state.showViewer} place={this.state.place}
          currentIndex={this.state.currentIndex} buttonHandler={this.buttonHandler} />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
