/* eslint-disable */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import App from '../client/App';

configure({ adapter: new Adapter() });

describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  test('should make API call on componentDidMount', () => {
    let wrapper = shallow(<App />);

  });

});
