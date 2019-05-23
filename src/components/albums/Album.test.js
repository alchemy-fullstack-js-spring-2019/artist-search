import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album component',  ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Album album='test album' image='test image'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
