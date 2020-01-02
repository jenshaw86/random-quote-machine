import React, {useState, useEffect} from 'react';
import Text from './text';
import Author from './author'
import TweetButton from './tweetButton';
import NewQuoteButton from './newQuoteButton';

import {getQuote} from '../utils/api'

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quoteAPI = `https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?`
  
  useEffect(() => {
    fetch(`${quoteAPI}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return(
    <div id="quote-box">
      <Text />
      <Author />
      <TweetButton />
      <NewQuoteButton />
    </div>
  )
}



export default QuoteBox;