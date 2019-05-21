import React from 'react';
import { shallow } from 'enzyme';
import Recordings from './Recordings';

describe('Recordings component', () => {
  it('renders the Recordings', () => {
    const fakeData = [
      {
        title: 'Stronger'
      },
      {
        title: 'Lift Yourself'
      },
      {
        title: 'Gold Digger'
      }
    ];

    const wrapper = shallow(<Recordings artist={ 'Kanye West' } recordingArray={ fakeData }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
