/* eslint-disable */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import styled from 'styled-components';

import Gallery from '../client/Gallery.jsx';

configure({ adapter: new Adapter() });
const testUrl = 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg';
const testPlace = {
    _id: 1,
    name: 'test',
    photos_food: [testUrl, testUrl, testUrl],
    photos_building: [testUrl, testUrl, testUrl, testUrl, testUrl, testUrl]
}

describe('Gallery lifecycle', () => {
  test('should render a Wrapper component', () => {
    let wrap = render(<Gallery place={testPlace} />);
    expect(wrap.find('#wrapper')).toHaveLength(1);
  });

  test('should render 2 SmallColumn components', () => {
    let wrap = render(<Gallery place={testPlace} />);
    expect(wrap.find('.small-column')).toHaveLength(2);
  });

  test('should render a MediumColumn component', () => {
    let wrap = render(<Gallery place={testPlace} />);
    expect(wrap.find('.medium-column')).toHaveLength(1);
  });

  test('should render a LargeColumn component', () => {
    let wrap = render(<Gallery place={testPlace} />);
    expect(wrap.find('.large-column')).toHaveLength(1);
  });

  test('should render 9 Picture components', () => {
    let wrap = render(<Gallery place={testPlace} />);
    expect(wrap.find('.picture')).toHaveLength(9);
  });
});

describe('Click handling', () => {
  test('should call props.clickHandler when clicked', () => {
    let mockFn = jest.fn();
    let wrap = shallow(<Gallery place={testPlace} clickHandler={mockFn} />);
    wrap.find('.picture').first().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
