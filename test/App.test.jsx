/* eslint-disable */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import styled from 'styled-components';

import App from '../client/App';
import Gallery from '../client/Gallery';
import Viewer from '../client/Viewer';

configure({ adapter: new Adapter() });

describe('App lifecycle', () => {

  test('should render the app component on the screen', () => {
    let wrap = shallow(<App />);
    expect(wrap).toBeTruthy();
  });

  test('should render Gallery and Viewer components on load', () => {
    let wrap = shallow(<App />);
    wrap.setState({ showGallery: true });
    expect(wrap.find(Gallery)).toBeTruthy();
    expect(wrap.find(Viewer)).toBeTruthy();
  });

  test('should make getPlace call on componentDidMount', () => {
    let wrap = shallow(<App />);
    let mockFn = jest.fn();
    wrap.instance().getPlace = mockFn;
    wrap.instance().forceUpdate();
    wrap.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  test('should pass state.place to Gallery', () => {
    let wrap = shallow(<App />);
    wrap.setState({
      place: {
        _id: 1,
        name: 'test',
        photos_food: ['a'],
        photos_building: ['b']
      },
    }, () => {
      expect(wrap.state('place').name).toEqual('test');
    })
  });

});

describe('getPlace', () => {
  test('getPlace should make request with input id and return correct output', () => {
    let wrap = shallow(<App />);
    wrap.instance().getPlace(1)
      .then(response => {
        expect(response.data._id).toBe(1);
        expect(response.data.photos_food).toBeTruthy();
        expect(response.data.photos_food[0]).toBe("https://eric-liu-turntable.s3-us-west-1.amazonaws.com/1_food_1");
      })
      .catch(err => { });
  });
});
