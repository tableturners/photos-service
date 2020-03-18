/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Gallery from '../client/Gallery';

configure({ adapter: new Adapter() });
const testPlace = {
  _id: 0,
  name: 'test',
  urls: ['test'],
};

describe('Gallery lifecycle', () => {
  test('should render 2 SmallColumn components', () => {
    const wrap = shallow(<Gallery place={testPlace} />);
    expect(wrap.find('.small-column')).toHaveLength(2);
  });

  test('should render a MediumColumn component', () => {
    const wrap = shallow(<Gallery place={testPlace} />);
    expect(wrap.find('.medium-column')).toHaveLength(1);
  });

  test('should render a LargeColumn component', () => {
    const wrap = shallow(<Gallery place={testPlace} />);
    expect(wrap.find('.large-column')).toHaveLength(1);
  });

  test('should render 9 Picture components', () => {
    const wrap = shallow(<Gallery place={testPlace} />);
    expect(wrap.find('.picture')).toHaveLength(9);
  });
});

describe('Click handling', () => {
  test('should call props.clickHandler when clicked', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<Gallery place={testPlace} clickHandler={mockFn} />);
    wrap.find('.picture').first().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('img should pass id to props.clickHandler when clicked', () => {
    const mockFn = (event) => expect(event.target.id).toBe('0');
    const wrap = shallow(<Gallery place={testPlace} clickHandler={mockFn} />);
    wrap.find('.picture').first().simulate('click', {
      target: { id: '0' },
    });
  });
});
