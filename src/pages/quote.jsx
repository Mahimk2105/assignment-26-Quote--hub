import React, { useState } from 'react';

const initialQuotes = [
  { text: "Here you can find inspiring quotes.", author: "Quote Hub" },

  { text: "Feel free to explore and get inspired!", author: "Quote Hub" }
];

const Quotes = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleAddQuote = (e) => {
    e.preventDefault();
    if (newQuote.trim() !== '') {
      setQuotes([...quotes, { text: newQuote, author: newAuthor || "Anonymous" }]);
      setNewQuote('');
      setNewAuthor('');
    }
  };

  const handleReset = () => {
    setQuotes(initialQuotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-300 flex flex-col">
   
      <nav className="bg-white shadow-md py-4 px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Quote Hub</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="/quote" className="hover:text-blue-600">Quotes</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">About</a>
            </li>
          </ul>
        </div>
      </nav>
    
      <div className="flex items-center justify-center flex-1">
        <div className="w-full max-w-2xl mx-auto p-8 bg-gray-200 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-7  mt-3.5 text-center">"Where Words Find You"</h1>
          <form onSubmit={handleAddQuote} className="mb-6 flex flex-col gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Write your quote or thought..."
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
              className="p-2 rounded border"
            />
            <input
              type="text"
              placeholder="Author"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="p-2 rounded border"
            />
            <div className="flex gap-2 justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add Quote
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Reset
              </button>
            </div>
          </form>
          <div className="grid gap-4 max-w-xl mx-auto">
            {quotes.map((q, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded shadow text-center">
                <p className="italic text-lg">"{q.text}"</p>
                <p className="text-right text-gray-600">— {q.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
       <footer className="bg-white shadow-md py-4 px-8 mt-6">
        <div className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Quote Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Quotes;