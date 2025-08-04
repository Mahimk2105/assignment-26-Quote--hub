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
  }
    ,
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    }
];

function QuoteHub() {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setIndex(newIndex);
  };

  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
     <nav className="bg-white shadow p-4">
  <div className="w-full px-6 py-4 flex justify-between items-center">
    <div className="text-4xl font-bold absolute left-4">Quote Hub</div>
    <div className="space-x-6 absolute right-4">
      <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
      <a href="#" className="text-gray-800 hover:text-blue-500">Quotes</a>
      <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
    </div>
  </div>
</nav>

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-yellow-400">
      <div className="bg-white text-gray-800 max-w-xl w-full p-8 rounded-2xl shadow-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold">Quote of the Moment</h1>
        <p className="text-xl italic text-gray-600">"{quotes[index].quote}"</p>
        <p className="text-lg font-semibold text-right">— {quotes[index].author}</p>
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

export default QuoteHub;
