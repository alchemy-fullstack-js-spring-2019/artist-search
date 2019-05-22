import React from 'react';
import { shallow } from 'enzyme';
import AlbumInfo from './AlbumInfo';

describe('AlbumInfo component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<AlbumInfo year='' title='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
