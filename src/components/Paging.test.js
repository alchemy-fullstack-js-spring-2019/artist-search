import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Paging currentPage={1} totalPages={2} changePage={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
