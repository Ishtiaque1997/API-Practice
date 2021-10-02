const loadQuotes=()=>{
 fetch('https://api.kanye.rest')
 .then(res=>res.json())
 .then(data=>displayQuote(data))
}
const displayQuote=quote=>{
 const holder=document.getElementById('quote');
 holder.innerText=quote.quote
}