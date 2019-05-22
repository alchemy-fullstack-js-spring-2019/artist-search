import React from 'react';
import { shallow } from 'enzyme';
import AlbumView from './AlbumView';

describe('AlbumView component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<AlbumView match={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
