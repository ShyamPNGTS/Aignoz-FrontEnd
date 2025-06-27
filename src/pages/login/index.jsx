import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png';
import sideImage from '../../assets/images/login-sideImg.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
        type: 'direct',
      });

      const { user, token } = res.data.data;

    // Store user and token in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);


      const data = res.data;

      if (data.status === 'success') {
        console.log('Login success:', data.data.user);

        // Optionally store token
        localStorage.setItem('token', data.data.token);

        // Redirect after successful login
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen justify-center items-center flex flex-col md:flex-row md:bg-contain md:bg-right bg-none md:bg-no-repeat md:bg-[url('/src/assets/images/login-bg-rectangle.png')]">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12">
        <div className="flex-shrink-0 mx-auto cursor-pointer text-xl font-bold text-gray-800">
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
        </div>
        <h2 className="text-[24px] mt-10 font-[500] text-[#24292E] mb-4">Welcome to AIGNOZ</h2>

        <form className="mt-3 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-[16px] font-medium text-[#24292E] mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[16px] font-medium text-[#24292E] mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <div className="text-right text-sm text-primary-600 cursor-pointer hover:underline">
            <Link to={'/forgot-password'}>forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition"
          >
            Login
          </button>
        </form>

        {/* <div className="my-6 flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div> */}

        {/* <button className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button> */}

        <p className="text-sm text-center mt-6">
          Don’t have an account? <Link to={'/signup'}><span className="text-primary-600 hover:underline cursor-pointer">Sign up</span></Link>
        </p>
      </div>

      <div className="hidden md:block">
        <img src={sideImage} alt="Login Illustration" className="w-[100%] object-cover" />
      </div>
    </div>
  );
};

export default Login;
