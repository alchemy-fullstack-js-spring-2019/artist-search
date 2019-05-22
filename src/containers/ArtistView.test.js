import React from 'react';
import { shallow } from 'enzyme';
import ArtistView from './ArtistView';

describe('ArtistView component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ArtistView match={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
