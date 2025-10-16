import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[beige] p-4 flex justify-between items-center text-black">
      <h1 className="text-2xl cursor-pointer" onClick={() => navigate('/')}>
        Interview App
      </h1>

      <div className="flex space-x-[30px]">
        <button
          className="text-white px-3 py-1 rounded"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="text-white px-3 py-1 rounded"
          onClick={() => navigate('/about')}
        >
          About
        </button>
        <button
          className="text-white px-3 py-1 rounded"
          onClick={() => navigate('/contact')}
        >
          Contact
        </button>
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
