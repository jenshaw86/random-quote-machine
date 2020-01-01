import React from 'react';
import {shallow} from 'enzyme';

import QuoteBox from '../components/quoteBox';
import Text from '../components/text';
import Author from '../components/author';
import TweetButton from '../components/tweetButton';
import NewQuoteButton from '../components/newQuoteButton';

describe ('<QuoteBox />', () => {
  const wrapper = shallow(<QuoteBox />);
  
  it ('has the id "quote-box"', () => {
    expect(wrapper.is('#quote-box')).toBe(true)
  })

  it ('contains text component', () => {
    expect(wrapper.find(Text).exists()).toBe(true)
  })

  it ('contains author component', () => {
    expect(wrapper.find(Author).exists()).toBe(true)
  })

  it ('contains tweet component', () => {
    expect(wrapper.find(TweetButton).exists()).toBe(true)
  })

  it('contains new quote component', () => {
    expect(wrapper.find(NewQuoteButton).exists()).toBe(true)
  })
})