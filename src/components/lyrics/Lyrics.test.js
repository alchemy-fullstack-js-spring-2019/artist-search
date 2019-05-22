import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component',  ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Lyrics lyrics={'hello'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
