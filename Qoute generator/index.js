let btn = document.querySelector('#new-quote')
let qoute  =  document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "In three words, I can sum up everything I've learned about life: it goes on.",
      person: "Robert Frost"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      person: "Jordan Belfort"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "In three words, I can sum up everything I've learned about life: it goes on.",
      person: "Robert Frost"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      person: "Jordan Belfort"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "In three words, I can sum up everything I've learned about life: it goes on.",
      person: "Robert Frost"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      person: "Jordan Belfort"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
   
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
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
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
      quote: "The best preparation for tomorrow is doing your best today.",
      person: "H. Jackson Brown Jr."
    },
    {
      quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
      person: "Chantal Sutherland"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      person: "Joshua J. Marine"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "If you want to achieve greatness, stop asking for permission.",
      person: "Anonymous"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      person: "Vidal Sassoon"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "The best way to predict the future is to create it.",
      person: "Peter Drucker"
    },
  ];
  btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    qoute.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  })
