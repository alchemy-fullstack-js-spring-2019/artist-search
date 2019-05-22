import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs component',  ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Songs match={{ params: 'url' }} songsArray={[{ title: 'song2' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
