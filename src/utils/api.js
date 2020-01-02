const quoteAPI = `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?`

export const getQuote = () => (
  fetch(`${quoteAPI}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
)