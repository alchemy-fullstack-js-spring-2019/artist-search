import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Album album={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
