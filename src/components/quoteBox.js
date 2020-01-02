import React, {useState, useEffect} from 'react';
import Text from './text';
import Author from './author'
import TweetButton from './tweetButton';
import NewQuoteButton from './newQuoteButton';

// import {getQuote} from '../utils/api'

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch(`https://quote-garden.herokuapp.com/quotes/random`)
    .then(res => res.json())
    .then(data => {
      setQuote(data.quoteText)
      setAuthor(data.quoteAuthor)
    })
    .catch(err => console.log(err.message))
  }, [])

  return(
    <div id="quote-box">
      <Text quote={quote}/>
      <Author author={author}/>
      <TweetButton />
      <NewQuoteButton />
    </div>
  )
}



export default QuoteBox;