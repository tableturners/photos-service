/* eslint-disable no-underscore-dangle */
/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import App from '../client/App';
import Gallery from '../client/Gallery';
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

describe('App lifecycle', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<App />);
    wrap.setState({ place: testPlace });
  });

  test('should render the app component on the screen', () => {
    expect(wrap).toBeTruthy();
  });

  test('should render Gallery and Viewer components on load', () => {
    expect(wrap.find(Gallery)).toHaveLength(1);
    expect(wrap.find(Viewer)).toHaveLength(1);
  });

  test('should make getPlace call on componentDidMount', () => {
    const mockFn = jest.fn();
    wrap.instance().getPlace = mockFn;
    wrap.instance().forceUpdate();
    wrap.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  test('should pass state.place to Gallery', () => {
    expect(wrap.state('place').name).toEqual('test');
    expect(wrap.find(Gallery).prop('place').name).toEqual('test');
  });
});

describe('getPlace', () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<App />);
  });

  test('getPlace should make request with input id and return correct output', () => {
    wrap.instance().getPlace(1)
      .then((response) => {
        expect(response.data._id).toBe(1);
        expect(response.data.pics.length).toBe(10);
        expect(response.data.pics[0].url).toBe('https://eric-liu-turntable.s3-us-west-1.amazonaws.com/0_0');
      })
      .catch((err) => { throw err; });
  });

  test('getPlace should write valid response to state.place', () => {
    wrap.instance().getPlace(1)
      .then(() => {
        expect(wrap.state('place')._id).toBe(1);
        expect(wrap.state('place').pics.length).toBe(10);
        expect(wrap.state('place').pics[0].url).toBe('https://eric-liu-turntable.s3-us-west-1.amazonaws.com/0_0');
      })
      .catch((err) => { throw err; });
  });
});

describe('clickHandler', () => {
  test('should change showViewer and currentIndex', () => {
    const wrap = mount(<App />);
    wrap.setState({ place: testPlace });
    wrap.find('#picture-0').first()
      .simulate('click', { target: { id: 'picture-0' } });
    expect(wrap.state('showViewer')).toBe(true);
    expect(wrap.state('currentIndex')).toBe(0);
  });
});
