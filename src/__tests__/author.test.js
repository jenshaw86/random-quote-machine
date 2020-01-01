import React from 'react';
import {shallow} from 'enzyme';
import Author from '../components/author'


describe ('<Author />', () => {
  const wrapper = shallow(<Author />);
  
  it ('has the id "author"', () => {
    expect(wrapper.is('#author')).toBe(true)
  })
})