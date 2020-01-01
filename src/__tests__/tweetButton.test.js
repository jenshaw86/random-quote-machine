import React from 'react';
import {shallow} from 'enzyme';

import TweetButton from '../components/tweetButton'

describe ('<TweetButton />', () => {
  const wrapper = shallow(<TweetButton />);
  
  it ('has the id "tweet-quote"', () => {
    expect(wrapper.is('#tweet-quote')).toBe(true)
  })
})