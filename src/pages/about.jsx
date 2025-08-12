import React from 'react';

const About = () => {
  return (
     <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-400 flex flex-col">
      {/* Navbar */}
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
      {/* Main Content */}
      <div className="flex items-center justify-center flex-1 w-full">
        <div className="bg-white bg-opacity-90 max-w-2xl w-full p-8 rounded-xl shadow-lg text-center mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to <span className="font-semibold text-blue-600">Quote Hub</span>!<br />
            Our mission is to inspire and motivate people every day through the power of words.<br />
            We believe that a single quote can change your perspective, lift your mood, and spark new ideas.
          </p>
          <p className="text-md text-gray-600 mb-4">
            <span className="font-semibold">What we offer:</span>
            <ul className="list-disc list-inside text-left mt-2 mb-4 mx-auto max-w-md">
              <li>Curated collection of famous and uplifting quotes</li>
              <li>Ability to add and share your own thoughts</li>
              <li>Simple, beautiful, and responsive design</li>
            </ul>
          </p>
          <p className="text-md text-gray-600">
            Made with <span className="text-pink-500">❤</span> by passionate developers.<br />
            Thank you for visiting and being part of our community!
          </p>
        </div>
      </div>
      <div>
        <a href="https://github.com/Mahimk2105/assignment-26-Quote--hub"> <img src="/public/github.png" alt="GitHub" />GitHub </a>
      </div>
      <footer className="bg-white shadow-md py-4 px-8 mt-6">
        <div className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Quote Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;