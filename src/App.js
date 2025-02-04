import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div >
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-bold">MyApp</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Options */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4  space-y-3">
            <li className="border-b border-blue-300 pb-2">
              <a href="/" className="block hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="border-b border-blue-300 pb-2">
              <a href="/about" className="block hover:text-gray-300">
                About
              </a>
            </li>
            <li className="border-b border-blue-300 pb-2">
              <a href="/services" className="block hover:text-gray-300">
                Services
              </a>
            </li>
            <li className="border-b border-blue-300 pb-2">
              <a href="/contact" className="block hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4 mx-auto">
        <div className="h-72 w-full sm:w-72 border border-blue-500 flex items-center justify-center rounded-md">
          <p>Card 1</p>
        </div>
        <div className="h-72 w-full sm:w-72 border border-blue-500 flex items-center justify-center rounded-md">
          <p>Card 2</p>
        </div>
        <div className="h-72 w-full sm:w-72 border border-blue-500 flex items-center justify-center rounded-md">
          <p>Card 3</p>
        </div>
        <div className="h-72 w-full sm:w-72 border border-blue-500 flex items-center justify-center rounded-md">
          <p>Card 4</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 p-4 mx-auto">
        <div className="h-72 w-full sm:w-[60%] border border-blue-500 flex items-center justify-center rounded-md">
          <p className="break-words overflow-hidden p-6">
            erhgiuewhrgierwhgiewhgiulhewilghiluewhgiluehgiluewilgheihghhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhyyyyyyyyyyyyyy
          </p>
        </div>
        <div className="h-72 w-full sm:w-[34%] border border-blue-500 flex items-center justify-center rounded-md">
          <p>Card 6</p>
        </div>
      </div>

    </div>
  );
}

export default App;
