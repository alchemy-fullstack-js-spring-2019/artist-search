import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component',  ()=>{
  it('renders an artist', ()=>{
    const wrapper = shallow(<Artist artist={{ name: 'name', disambiguation: 'true' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
