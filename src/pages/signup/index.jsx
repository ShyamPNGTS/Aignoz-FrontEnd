import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import sideImage from '../../assets/images/signup-sideImg.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return setError('All fields are required');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        type: "direct",
      });

      if (res.data.status === 'success') {
        navigate('/login');
      } else {
        setError(res.data.message || 'Signup failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen justify-center items-center flex flex-col md:flex-row md:bg-contain md:bg-right bg-none md:bg-no-repeat md:bg-[url('/src/assets/images/login-bg-rectangle.png')]">
      {/* Left: Signup Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12">
        <div className="flex-shrink-0 mx-auto cursor-pointer text-xl font-bold text-gray-800">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <h2 className="text-[24px] mt-10 font-[500] text-[#24292E] mb-4">Start Your Journey with AIGNOZ</h2>

        <form className="mt-3 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-[16px] font-medium text-[#24292E] mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[16px] font-medium text-[#24292E] mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[16px] font-medium text-[#24292E] mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-[16px] font-medium text-[#24292E] mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Confirm your password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        {/* <div className="my-6 flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button> */}

        <p className="text-sm text-center mt-6">
          Already have an account? <Link to="/login"><span className="text-primary-600 hover:underline">Login</span></Link>
        </p>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block">
        <img src={sideImage} alt="Signup Illustration" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Signup;
