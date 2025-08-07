import React, { useState } from 'react';

const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  }
];

function App() {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    // Prevent same quote twice in a row
    while (newIndex === index && quotes.length > 1) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    setIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
   
      <nav className="bg-white shadow-md py-4 px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">InspireMe</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Quotes</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
          </ul>
        </div>
      </nav>

 
      <div className="flex items-center justify-center h-[calc(100vh-5rem)] px-4">
        <div className="bg-white max-w-xl w-full p-8 rounded-xl shadow-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Quote of the Day</h2>
          <p className="text-xl italic text-gray-600">"{quotes[index].quote}"</p>
          <p className="text-lg font-semibold text-right text-gray-700">— {quotes[index].author}</p>
          <button
            onClick={handleNextQuote}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;