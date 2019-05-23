import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('Song component',  ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Song song='song' />);
    expect(wrapper).toMatchSnapshot();
  });
});
