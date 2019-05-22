import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from './ArtistList';

describe('ArtistList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ArtistList artistArr={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
