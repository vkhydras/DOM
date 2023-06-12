let btn = document.querySelector('#new-quote')
let qoute  =  document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best way to predict the future is to create it.",
      person: "Peter Drucker"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      person: "Ralph Waldo Emerson"
    }
  ];
  btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    qoute.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  })
