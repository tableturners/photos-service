/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Gallery from '../client/Gallery';

configure({ adapter: new Adapter() });
const testPlace = {
  _id: 0,
  name: 'test',
  pics: [
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' },
    { url: '0', name: 'a', date: '0' }
  ]
};

describe('Gallery lifecycle', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Gallery place={testPlace} />);
  });

  test('should render gallery when place has urls', () => {
    expect(wrap.find('#gallery')).toHaveLength(1);
  });

  test('should render nothing when no urls given', () => {
    wrap.setProps({ place: { _id: 0, name: '', pics: [] } });
    expect(wrap.find('#gallery')).toHaveLength(0);
  });

  test('should render 2 SmallColumn components', () => {
    expect(wrap.find('#small-column-1')).toHaveLength(1);
    expect(wrap.find('#small-column-2')).toHaveLength(1);
  });

  test('should render a MediumColumn component', () => {
    expect(wrap.find('#medium-column')).toHaveLength(1);
  });

  test('should render a LargeColumn component', () => {
    expect(wrap.find('#large-column')).toHaveLength(1);
  });

  test('should render 9 Picture components', () => {
    expect(wrap.find('#picture-0')).toHaveLength(1);
    expect(wrap.find('#picture-1')).toHaveLength(1);
    expect(wrap.find('#picture-2')).toHaveLength(1);
    expect(wrap.find('#picture-3')).toHaveLength(1);
    expect(wrap.find('#picture-4')).toHaveLength(1);
    expect(wrap.find('#picture-5')).toHaveLength(1);
    expect(wrap.find('#picture-6')).toHaveLength(1);
    expect(wrap.find('#picture-7')).toHaveLength(1);
    expect(wrap.find('#picture-8')).toHaveLength(1);
  });
});

describe('Click handling', () => {
  test('should call props.clickHandler when clicked', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<Gallery place={testPlace} clickHandler={mockFn} />);
    wrap.find('#picture-0').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('img should pass id to props.clickHandler when clicked', () => {
    const mockFn = (event) => expect(event.target.id).toBe('0');
    const wrap = shallow(<Gallery place={testPlace} clickHandler={mockFn} />);
    wrap.find('#picture-0').simulate('click', {
      target: { id: '0' },
    });
  });
});
