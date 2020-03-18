/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Viewer from '../client/Viewer';

configure({ adapter: new Adapter() });
const testPlace = {
  _id: 0,
  name: 'test',
  urls: ['test'],
};

describe('Viewer lifecycle', () => {
  test('should not render if show prop is false', () => {
    const wrap = shallow(<Viewer show={false} />);
    expect(wrap.contains(<Viewer />)).toBe(false);
  });

  test('should render child components', () => {
    const wrap = shallow(<Viewer show place={testPlace} />);
    expect(wrap.find('#viewer-background')).toHaveLength(1);
    expect(wrap.find('#close-button')).toHaveLength(1);
    expect(wrap.find('#left-arrow')).toHaveLength(1);
    expect(wrap.find('#viewer-image')).toHaveLength(1);
    expect(wrap.find('#right-arrow')).toHaveLength(1);
  });
});

describe('Button handling', () => {
  test('buttons should call props.buttonHandler when clicked', () => {
    const mockFn = jest.fn();
    const wrap = shallow(<Viewer show place={testPlace} buttonHandler={mockFn} />);
    wrap.find('#viewer-background').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
    wrap.find('#close-button').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
    wrap.find('#left-arrow').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(3);
    wrap.find('#right-arrow').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(4);
  });

  test('background should pass id to props.Buttonhandler when clicked', () => {
    const mockFnBackground = (event) => expect(event.target.id).toBe('viewer-background');
    const wrap = shallow(<Viewer show place={testPlace} buttonHandler={mockFnBackground} />);
    wrap.find('#viewer-background').simulate('click', {
      target: { id: 'viewer-background' },
    });
  });

  test('close button should pass id to props.Buttonhandler when clicked', () => {
    const mockFn = (event) => expect(event.target.id).toBe('close-button');
    const wrap = shallow(<Viewer show place={testPlace} buttonHandler={mockFn} />);
    wrap.find('#close-button').simulate('click', {
      target: { id: 'close-button' },
    });
  });

  test('left arrow should pass id to props.Buttonhandler when clicked', () => {
    const mockFn = (event) => expect(event.target.id).toBe('left-arrow');
    const wrap = shallow(<Viewer show place={testPlace} buttonHandler={mockFn} />);
    wrap.find('#left-arrow').simulate('click', {
      target: { id: 'left-arrow' },
    });
  });

  test('buttons should pass id to props.Buttonhandler when clicked', () => {
    const mockFn = (event) => expect(event.target.id).toBe('right-arrow');
    const wrap = shallow(<Viewer show place={testPlace} buttonHandler={mockFn} />);
    wrap.find('#right-arrow').simulate('click', {
      target: { id: 'right-arrow' },
    });
  });
});
