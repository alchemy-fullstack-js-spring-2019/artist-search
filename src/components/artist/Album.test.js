import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album component', () => {
  it('matches snapshot', () => {
    const album = {
      id: '5678',
      title: '7890',
      date: '67890',
      ['cover-art-archive']: {
        front: '7800'
      },
    };
    
    const wrapper = shallow(<Album album={album} />);
    expect(wrapper).toMatchSnapshot();
  });
});
