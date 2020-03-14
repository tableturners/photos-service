/* eslint-disable */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import App from '../client/App';

configure({ adapter: new Adapter() });

describe('render + componentDidMount', () => {

  test('should render the app component on the screen', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  test('should make getPlace call on componentDidMount', () => {
    let wrapper = shallow(<App />);
    let mockFn = jest.fn();
    wrapper.instance().getPlace = mockFn;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

});

describe('getPlace', () => {
  test('getPlace should make request with input id and return correct output', () => {
    let wrapper = shallow(<App />);
    wrapper.instance().getPlace(1)
      .then(response => {
        expect(response.data._id).toBe(1);
        expect(response.data.photos_food).toBeTruthy();
        expect(response.data.photos_food[0]).toBe("https://eric-liu-turntable.s3-us-west-1.amazonaws.com/1_food_1");
        expect(response.data.photos_food[0]).not.toBe("https://eric-liu-turntable.s3-us-west-1.amazonaws.com/1_food_1");
      })
      .catch(err => {});
  });
});
