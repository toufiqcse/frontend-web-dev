// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);

    try {
      const res = await axios.post('/api/contact', body, config);
      console.log(res.data);
      // clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-1">

      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-white font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-white font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="message"
            className="block text-white font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Your Message"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
