// RANDOM QUOTES GENERATOR

/* QOUTE IDEAS (Based on your Horoscope:):
- Your sign is sun
- You are having good luck.
- You should: "trust no one"
*/

const base = ['Based on your Horoscope: '];
const quote1 = ['Your sign is sun'];
const quote2 = ['You are having good luck.'];
const quote3 = ['You should: "trust no one"'];
const messages = [quote1, quote2, quote3];

/*const quoteObject = 
{
  base: ['Based on your Horoscope: '],
  quote1: ['Your sign is sun'],
  quote2: ['You are having good luck.'],
  quote3: ['You should: "trust no one"'],
} */

const randomQuote = (arr) => {
  let random = Math.round(Math.random() * arr.length);
  return `${base} ${arr[random]}`
}

console.log(randomQuote(messages))


