import React from 'react';

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
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    quote: "Great things never came from comfort zones.",
    author: "Neil Strauss"
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }
];

const hoverGradients = [
  "hover:bg-gradient-to-r hover:from-pink-300 hover:to-yellow-300",
  "hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300",
  "hover:bg-gradient-to-r hover:from-green-300 hover:to-cyan-400",
  "hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-400",
  "hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400",
  "hover:bg-gradient-to-r hover:from-red-300 hover:to-pink-400",
  "hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-400"
];

const bgGradients = [
  "from-blue-300 to-purple-400",
  "from-pink-300 to-yellow-300",
  "from-green-300 to-cyan-400"
];

const Home = () => {
  const randomGradient = bgGradients[Math.floor(Math.random() * bgGradients.length)];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex flex-col relative">

      <div className={`absolute top-0 right-0 w-48 h-48 rounded-bl-full bg-gradient-to-br ${randomGradient} z-10`} />

   
      <nav className="bg-white shadow-md py-4 px-8 relative z-20">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Quote Hub</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/quote" className="hover:text-purple-600">Quotes</a></li>
            <li><a href="/about" className="hover:text-purple-600">About</a></li>
          </ul>
        </div>
      </nav>
    

      <div className="flex flex-col items-center justify-center px-4 flex-1 relative z-20">
        <p className="text-2xl text-white mb-6 mt-3.5 text-center max-w-xl">
          Welcome to the Quote Hub!🥳🥳 <br /> Here you can find inspiring quotes to uplift your day.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-6">Your Daily Inspiration</h2>
        
       
        <div className="grid gap-6 max-w-2xl w-full">
          {quotes.map((q, i) => (
            <div
              key={i}
        className={`bg-white bg-opacity-80 p-6 rounded-lg shadow text-center transition transform hover:scale-105 hover:shadow-xl cursor-pointer ${hoverGradients[i % hoverGradients.length]} hover:text-gray-900`}
            >
              <p className="italic text-xl text-gray-800">"{q.quote}"</p>
              <p className="text-right text-gray-600 mt-2">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;