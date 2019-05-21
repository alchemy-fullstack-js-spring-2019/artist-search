import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases component', () => {
  it('renders the Releases', () => {
    const fakeData = [
      {
        id: '123',
        title: 'okay',
        date: '1942',
        coverArt: 'https://radiohala.com/wp-content/uploads/default-cover-art.png',
      },
      {
        id: '442',
        title: 'Nah',
        date: '1099',
        coverArt: 'https://radiohala.com/wp-content/uploads/default-cover-art.png1'
      }
    ];

    const wrapper = shallow(<Releases releaseArray={ fakeData } artist="Yes" />);
    expect(wrapper).toMatchSnapshot();
  });
});
