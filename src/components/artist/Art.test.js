import React from 'react';
import { shallow } from 'enzyme';
import Art from './Art';

describe('Art component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Art id='' archive={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
