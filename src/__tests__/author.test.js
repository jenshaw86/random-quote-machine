import React from 'react';
import {shallow} from 'enzyme';
import Author from '../components/author'


describe ('<Author />', () => {
  const wrapper = shallow(<Author />);
  
  it ('contains an id, "author"', () => {
    expect(wrapper.is('#author')).toBe(true)
  })

})