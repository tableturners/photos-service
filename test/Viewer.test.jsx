/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Viewer from '../client/Viewer';

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

describe('Viewer lifecycle', () => {
  test('should not render if show prop is false', () => {
    const wrap = shallow(<Viewer show={false} />);
    expect(wrap.contains(<Viewer />)).toBe(false);
  });

  test('should render child components', () => {
    const wrap = shallow(<Viewer show place={testPlace} currentIndex={3} />);
    expect(wrap.find('#viewer-background')).toHaveLength(1);
    expect(wrap.find('#close-button')).toHaveLength(1);
    expect(wrap.find('#left-arrow')).toHaveLength(1);
    expect(wrap.find('#viewer-image')).toHaveLength(1);
    expect(wrap.find('#right-arrow')).toHaveLength(1);
  });
});

describe('Button handling', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Viewer show place={testPlace} currentIndex={3} />);
  });

  test('buttons should call props.buttonHandler when clicked', () => {
    const mockFn = jest.fn();
    wrap.setProps({ buttonHandler: mockFn });
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
    wrap.setProps({ buttonHandler: (event) => expect(event.target.id).toBe('viewer-background') });
    wrap.find('#viewer-background').simulate('click', {
      target: { id: 'viewer-background' }
    });
  });

  test('close button should pass id to props.Buttonhandler when clicked', () => {
    wrap.setProps({ buttonHandler: (event) => expect(event.target.id).toBe('close-button') });
    wrap.find('#close-button').simulate('click', {
      target: { id: 'close-button' }
    });
  });

  test('left arrow should pass id to props.Buttonhandler when clicked', () => {
    wrap.setProps({ buttonHandler: (event) => expect(event.target.id).toBe('left-arrow') });
    wrap.find('#left-arrow').simulate('click', {
      target: { id: 'left-arrow' }
    });
  });

  test('buttons should pass id to props.Buttonhandler when clicked', () => {
    wrap.setProps({ buttonHandler: (event) => expect(event.target.id).toBe('right-arrow') });
    wrap.find('#right-arrow').simulate('click', {
      target: { id: 'right-arrow' }
    });
  });
});

describe('Arrow button state', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Viewer show place={testPlace} />);
  });

  test('should return inactive left arrow when viewing first image', () => {
    wrap.setProps({ currentIndex: 0 }, () => {
      expect(wrap.find('#inactive-left-arrow')).toHaveLength(1);
      expect(wrap.find('#left-arrow')).toHaveLength(0);
    });
  });

  test('should return inactive right arrow when viewing last image', () => {
    wrap.setProps({ currentIndex: testPlace.pics.length - 1 }, () => {
      expect(wrap.find('#inactive-right-arrow')).toHaveLength(1);
      expect(wrap.find('#right-arrow')).toHaveLength(0);
    });
  });
});
