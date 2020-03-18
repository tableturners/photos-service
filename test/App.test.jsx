/* eslint-disable no-underscore-dangle */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../client/App';
import Gallery from '../client/Gallery';
import Viewer from '../client/Viewer';

configure({ adapter: new Adapter() });
const testPlace = {
  _id: 0,
  name: 'test',
  urls: ['test'],
};

describe('App lifecycle', () => {
  test('should render the app component on the screen', () => {
    const wrap = shallow(<App />);
    expect(wrap).toBeTruthy();
  });

  test('should render Gallery and Viewer components on load', () => {
    const wrap = shallow(<App />);
    wrap.setState({ showGallery: true });
    expect(wrap.find(Gallery)).toBeTruthy();
    expect(wrap.find(Viewer)).toBeTruthy();
  });

  test('should make getPlace call on componentDidMount', () => {
    const wrap = shallow(<App />);
    const mockFn = jest.fn();
    wrap.instance().getPlace = mockFn;
    wrap.instance().forceUpdate();
    wrap.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  test('should pass state.place to Gallery', () => {
    const wrap = shallow(<App />);
    wrap.setState({ place: testPlace }, () => expect(wrap.state('place').name).toEqual('test'));
    expect(wrap.find(Gallery).prop('place').name).toEqual('test');
  });
});

describe('getPlace', () => {
  test('getPlace should make request with input id and return correct output', () => {
    const wrap = shallow(<App />);
    wrap.instance().getPlace(1)
      .then((response) => {
        expect(response.data._id).toBe(1);
        expect(response.data.urls).toBeTruthy();
        expect(response.data.urls[0]).toBe('https://eric-liu-turntable.s3-us-west-1.amazonaws.com/0_0');
      })
      .catch((err) => { throw err; });
  });
});

describe('clickHandler', () => {
  test('should change showViewer and currentIndex', () => {
    const wrap = shallow(<App />);
    wrap.find(Gallery).dive().find('.picture').first()
      .simulate('click', { target: { id: 'picture-0' } });
    expect(wrap.state('showViewer')).toBe(true);
    expect(wrap.state('currentIndex')).toBe(0);
  });
});

describe('buttonHandler', () => {
  test('clicking close-button should change showViewer', () => {
    const wrap = shallow(<App />);
    wrap.find(Gallery).dive().find('.picture').first()
      .simulate('click', { target: { id: 'picture-0' } });
    expect(wrap.state('showViewer')).toBe(true);
    wrap.find(Viewer).dive().find('#close-button')
      .simulate('click', { target: { id: 'close-button' } });
    expect(wrap.state('showViewer')).toBe(false);
  });

  test('clicking viewer-background should change showViewer', () => {
    const wrap = shallow(<App />);
    wrap.find(Gallery).dive().find('.picture').first()
      .simulate('click', { target: { id: 'picture-0' } });
    expect(wrap.state('showViewer')).toBe(true);
    wrap.find(Viewer).dive().find('#viewer-background')
      .simulate('click', { target: { id: 'viewer-background' } });
    expect(wrap.state('showViewer')).toBe(false);
  });

  test('arrows should call advanceDisplay', () => {
    const wrap = shallow(<App />);
    const mockFn = jest.fn();
    wrap.instance().advanceDisplay = mockFn;
    wrap.find(Gallery).dive().find('.picture').first()
      .simulate('click', { target: { id: 'picture-0' } });
    expect(wrap.state('showViewer')).toBe(true);
    wrap.find(Viewer).dive().find('#right-arrow')
      .simulate('click', { target: { id: 'right-arrow' } });
    expect(mockFn).toHaveBeenCalledWith('right');
    wrap.find(Viewer).dive().find('#left-arrow')
      .simulate('click', { target: { id: 'left-arrow' } });
    expect(mockFn).toHaveBeenCalledWith('left');
  });
});

describe('keypressHandler', () => {
  test('should remove Viewer when ESC is hit', () => {

  });

  test('LEFT and RIGHT arrow keys should call advanceDisplay', () => {
    const wrap = shallow(<App />);
    const mockFn = jest.fn();
    wrap.instance().advanceDisplay = mockFn;
    wrap.instance().componentDidMount();
    wrap.find(Gallery).dive().find('.picture').first()
      .simulate('click', { target: { id: 'picture-0' } });
    expect(wrap.state('showViewer')).toBe(true);
    wrap.instance().keypressHandler({ key: 'ArrowLeft' });
    expect(mockFn).toHaveBeenCalledWith('left');
    wrap.instance().keypressHandler({ key: 'ArrowRight' });
    expect(mockFn).toHaveBeenCalledWith('right');
  });
});

describe('advanceDisplay', () => {

});
