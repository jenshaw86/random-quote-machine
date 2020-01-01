import React from 'react';
import {shallow} from 'enzyme';
import Text from '../components/text'

describe ('<Text />', () => {
  const wrapper = shallow(<Text />);
  
  it ('has the id "text"', () => {
    expect(wrapper.is('#text')).toBe(true)
  })
})