/* eslint-env jest */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sum from '../client/app.jsx';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
