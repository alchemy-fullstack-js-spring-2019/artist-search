import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<SearchForm handleChange={jest.fn()} handleSubmit={jest.fn()} term='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
