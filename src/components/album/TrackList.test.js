import React from 'react';
import { shallow } from 'enzyme';
import TrackList from './TrackList';

describe('TrackList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TrackList artist='' tracks={[]} lyricsLoad={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
