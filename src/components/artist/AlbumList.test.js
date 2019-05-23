import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumList';

describe('AlbumList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<AlbumList albumArr={[]} artist='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
