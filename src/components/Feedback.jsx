import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
const FeedbackForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const googleFormURL = "https://script.google.com/macros/s/AKfycbwu2lyxVXEBCJ7rqFeYACNlnEEU6T-VyOBlKBJGtZa8zNKyq3G8h6Zn_oIWqLtnSejobQ/exec";

    const formDataToGoogle = new FormData();
    formDataToGoogle.append("name", formData.name);  // Replace with actual field entry ID
    formDataToGoogle.append("email", formData.email); // Replace with actual field entry ID
    formDataToGoogle.append("subject", formData.subject); // Replace with actual field entry ID
    formDataToGoogle.append("message", formData.message); // Replace with actual field entry ID

    fetch(googleFormURL, {
      method: "POST",
      body: formDataToGoogle,
      mode: "no-cors",
    })
      .then(() => {
        alert("Form Submitted Successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  };

  return (
    <>

      <Header />


      <div className="flex justify-center items-center h-screen mt-5 bg-gradient-to-r from-teal-400 to-green-500">

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FeedbackForm;
