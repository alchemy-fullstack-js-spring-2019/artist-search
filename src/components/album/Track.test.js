import React from 'react';
import { shallow } from 'enzyme';
import Track from './Track';

describe('Track component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Track artist='' songTitle='' lyricsLoad={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
