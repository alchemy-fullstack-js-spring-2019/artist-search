import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component',  ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Artists artistArray={[{ name: 'Bumblebee', id: 1234 }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
