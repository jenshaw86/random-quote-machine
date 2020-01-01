import React from 'react';
import Text from './text';
import Author from './author'
import TweetButton from './tweetButton';
import NewQuoteButton from './newQuoteButton';

const QuoteBox = () => (
  <div id="quote-box">
    <Text />
    <Author />
    <TweetButton />
    <NewQuoteButton />
  </div>
)



export default QuoteBox;