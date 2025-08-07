import React from 'react';

const Quotes = () => {
  const quotes = [
    { id: 1, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { id: 2, text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { id: 3, text: "Get busy living or get busy dying.", author: "Stephen King" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Famous Quotes</h2>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {quotes.map((quote) => (
          <div key={quote.id} className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-lg">"{quote.text}"</p>
            <p className="text-right font-semibold mt-2">— {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
