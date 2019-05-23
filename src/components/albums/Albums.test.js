import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums';

describe('Album component',  ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Albums albumArray={[{ 'cover-art-archive':true, title:'test' }]} image='test image' match={{ params:'url' }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
