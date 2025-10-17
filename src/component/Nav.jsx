import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-100 p-4 flex justify-between items-center text-black w-[100%]">
      <h1 className="text-2xl cursor-pointer" onClick={() => navigate('/')}>
        EasyHire
      </h1>

      <div className="flex space-x-4">
        <button
          className=" px-3 py-1 rounded"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className=" p-1 rounded shadow-md"
          onClick={() => navigate('/about')}
        >
          About
        </button>
        <button
          className=" p-1 rounded shadow-md"
          onClick={() => navigate('/contact')}
        >
          Contact
        </button>
      </div>

      <div className="flex space-x-4 p-1">
        <button
          className="bg-blue-500 text-white p-1 rounded shadow-md"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </button>
        <button
          className="bg-green-500 text-white p-1 rounded shadow-md"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
