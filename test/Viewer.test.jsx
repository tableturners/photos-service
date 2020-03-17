/* eslint-disable */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import Viewer from '../client/Viewer';

configure({ adapter: new Adapter() });

describe('App lifecycle', () => {

  test('should render the app component on the screen', () => {

  });

});
