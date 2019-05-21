import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {  
  it('renders the Artists', () => {
    const fakeData = [
      {
        id: '123',
        name: 'Shakira'
      },
      {
        id: '321',
        name: 'Beyonce'
      }
    ];
    
    const wrapper = shallow(<Artists artistArray={ fakeData }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
