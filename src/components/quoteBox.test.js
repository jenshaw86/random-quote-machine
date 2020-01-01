import React from 'react';
import {shallow} from 'enzyme';

import QuoteBox from './quoteBox';
import Text from './text';
import Author from './author';
import TweetButton from './tweetButton';
import NewQuoteButton from './newQuoteButton';

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
