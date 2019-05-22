import React from 'react';
import { shallow } from 'enzyme';
import ArtistSearch from './ArtistSearch';

describe('ArtistSearch component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ArtistSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
