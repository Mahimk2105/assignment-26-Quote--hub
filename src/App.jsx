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
];

function App() {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setIndex(newIndex);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-purple-600">
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
  );
}

export default App;
