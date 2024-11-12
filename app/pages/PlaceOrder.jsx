// PlaceOrder.js
import React, { useState } from 'react';

export default function PlaceOrder() {
  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    email: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Submission successful:', data);
        alert('Project submitted successfully!');
        setFormData({
          name: '',
          nationality: '',
          email: '',
          projectDescription: ''
        });
      })
      .catch((error) => {
        console.error('Error submitting project:', error);
        alert('There was an error submitting your project. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-start h-screen w-full md:w-7/10 p-8 bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">Discuss Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="nationality">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="projectDescription">
            Project Description
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-indigo-700 rounded hover:bg-indigo-600 transition duration-300"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}
