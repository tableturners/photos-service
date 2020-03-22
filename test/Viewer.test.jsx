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
  test('should not render if showViewer prop is false', () => {
    const wrap = shallow(<Viewer />);
    wrap.setState({ showViewer: false });
    expect(wrap.contains(<Viewer />)).toBe(false);
  });

  test('should render child components', () => {
    const wrap = shallow(<Viewer />);
    wrap.setState({ showViewer: true, place: testPlace, currentIndex: 3 });
    expect(wrap.find('#viewer-background')).toHaveLength(1);
    expect(wrap.find('#close-button')).toHaveLength(1);
    expect(wrap.find('#left-arrow')).toHaveLength(1);
    expect(wrap.find('#viewer-image')).toHaveLength(1);
    expect(wrap.find('#right-arrow')).toHaveLength(1);
    expect(wrap.find('#avatar-image')).toHaveLength(1);
    expect(wrap.find('#image-info')).toHaveLength(1);
    expect(wrap.find('#report-button')).toHaveLength(1);
  });
});

describe('buttonHandler', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Viewer />);
    wrap.setState({ showViewer: true, place: testPlace, currentIndex: 3 });
  });

  test('clicking viewer-background should change showViewer', () => {
    wrap.find('#viewer-background')
      .simulate('click', { target: { id: 'viewer-background' } });
    expect(wrap.state('showViewer')).toBe(false);
  });

  test('clicking close-button should change showViewer', () => {
    wrap.find('#close-button')
      .simulate('click', { target: { id: 'close-button' } });
    expect(wrap.state('showViewer')).toBe(false);
  });

  test('arrows should call advanceDisplay', () => {
    const mockFn = jest.fn();
    wrap.instance().advanceDisplay = mockFn;
    wrap.find('#right-arrow')
      .simulate('click', { target: { id: 'right-arrow' } });
    expect(mockFn).toHaveBeenCalledWith('right');
    wrap.find('#left-arrow')
      .simulate('click', { target: { id: 'left-arrow' } });
    expect(mockFn).toHaveBeenCalledWith('left');
  });
});

describe('keypressHandler', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Viewer />);
    wrap.setState({ showViewer: true, place: testPlace, currentIndex: 3 });
  });

  test('should do nothing when Viewer not active', () => {
    wrap.setState({ showViewer: false, currentIndex: 3 });
    wrap.instance().keypressHandler({ key: 'ArrowLeft' });
    expect(wrap.state('currentIndex')).toBe(3);
  });

  test('should remove Viewer when ESC is hit', () => {
    wrap.instance().keypressHandler({ key: 'Escape' });
    expect(wrap.state('showViewer')).toBe(false);
  });

  test('LEFT and RIGHT arrow keys should call advanceDisplay', () => {
    const mockFn = jest.fn();
    wrap.instance().advanceDisplay = mockFn;
    wrap.instance().keypressHandler({ key: 'ArrowLeft' });
    expect(mockFn).toHaveBeenCalledWith('left');
    wrap.instance().keypressHandler({ key: 'ArrowRight' });
    expect(mockFn).toHaveBeenCalledWith('right');
  });
});

describe('advanceDisplay', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Viewer />);
    wrap.setState({ showViewer: true, place: testPlace, currentIndex: 3 });
  });

  test('should decrement currentIndex if input is `left`', () => {
    wrap.setState({ currentIndex: 1 }, () => wrap.instance().advanceDisplay('left'));
    expect(wrap.state('currentIndex')).toBe(0);
  });

  test('should increment currentIndex if input is `right`', () => {
    wrap.setState({ currentIndex: 1 }, () => wrap.instance().advanceDisplay('right'));
    expect(wrap.state('currentIndex')).toBe(2);
  });

  test('should not move currentIndex out of bounds', () => {
    wrap.setState({ currentIndex: 0 }, () => wrap.instance().advanceDisplay('left'));
    expect(wrap.state('currentIndex')).toBe(0);
    wrap.setState({ currentIndex: 8 }, () => wrap.instance().advanceDisplay('right'));
    expect(wrap.state('currentIndex')).toBe(8);
  });
});

describe('Arrow button state', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<Viewer />);
  });

  test('should return inactive left arrow when viewing first image', () => {
    wrap.setState({ showViewer: true, place: testPlace, currentIndex: 0 }, () => {
      expect(wrap.find('#inactive-left-arrow')).toHaveLength(1);
      expect(wrap.find('#left-arrow')).toHaveLength(0);
    });
  });

  test('should return inactive right arrow when viewing last image', () => {
    wrap.setState({ showViewer: true, place: testPlace, currentIndex: testPlace.pics.length - 1 }, () => {
      expect(wrap.find('#inactive-right-arrow')).toHaveLength(1);
      expect(wrap.find('#right-arrow')).toHaveLength(0);
    });
  });
});
