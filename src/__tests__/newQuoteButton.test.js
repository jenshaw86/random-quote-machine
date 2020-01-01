import React from 'react';
import {shallow} from 'enzyme';
import NewQuoteButton from '../components/newQuoteButton';

describe ('<NewQuoteButton />', () => {
  const wrapper = shallow(<NewQuoteButton />);
  
  it ('has the id "new-quote"', () => {
    expect(wrapper.is('#new-quote')).toBe(true)
  })
})