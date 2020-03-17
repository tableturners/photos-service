/* eslint-disable */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
import styled from 'styled-components';

import { Wrapper, SmallColumn, MediumColumn, LargeColumn, Picture, Gallery } from '../client/Gallery.jsx';

configure({ adapter: new Adapter() });

describe('Gallery lifecycle', () => {

  test('should render a Wrapper component', () => {
    let wrapper = shallow(<Gallery />);
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  test('should render 2 SmallColumn components', () => {
    let wrapper = shallow(<Gallery />);
    expect(wrapper.find(SmallColumn)).toHaveLength(2);
  });

  test('should render a MediumColumn component', () => {
    let wrapper = shallow(<Gallery />);
    expect(wrapper.find(MediumColumn)).toHaveLength(1);
  });

  test('should render a LargeColumn component', () => {
    let wrapper = shallow(<Gallery />);
    expect(wrapper.find(LargeColumn)).toHaveLength(1);
  });

  test('should render 9 Picture components', () => {
    let wrapper = shallow(<Gallery />);
    expect(wrapper.find(Picture)).toHaveLength(9);
  });
});
