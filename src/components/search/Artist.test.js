import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Artist artist='' id='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
