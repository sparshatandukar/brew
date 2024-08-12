import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterComponent from '../footer/FooterComponent';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../Axios/axios';

const ContactComponent = () => {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!contactData.name) errors.name = "Name is required";
    if (!contactData.email) errors.email = "Email is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axiosInstance.post(
          "/contact/create",
          contactData
        );
        console.log(response);

        // show success message
        toast.success("Message sent successfully!");
        setTimeout(() => {
          navigate("/home");
        }, 2000);

      } catch (error) {
        console.error(error);
        toast.error(error);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Contact Us Header */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://i.pinimg.com/564x/bc/bc/de/bcbcde5c596265fa7292cd5dedd19aef.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-white mt-4 px-4 text-center max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </header>

      {/* Contact Information & Form Section */}
      <div className="container mx-auto px-4 lg:px-20 py-12 flex flex-col lg:flex-row justify-between">
        
        {/* Contact Information */}
        <div className="lg:w-1/2 flex flex-col space-y-6">
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
            <FaPhoneAlt className="text-browninsh text-2xl" />
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">977-9812452672</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
            <FaWhatsapp className="text-browninsh text-2xl" />
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-800">Whatsapp</h3>
              <p className="text-gray-600">977-9812452672</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
            <FaEnvelope className="text-browninsh text-2xl" />
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@yoursite.com</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
            <FaMapMarkerAlt className="text-browninsh text-2xl" />
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-800">Our Shop</h3>
              <p className="text-gray-600">Banglamukhi, Patan, Lalitpur</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1889403547653!2d-122.4467474843247!3d37.75167477975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eeb8f96df6f%3A0x451e7b9481f751d9!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1626708339585!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <ToastContainer />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-browninsh"
              />
              {errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-browninsh"
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
            <textarea
              placeholder="Message"
              name="message"
              value={contactData.message}
              onChange={handleChange}
              className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-browninsh"
            ></textarea>
            <button
              className="w-full py-3 bg-yellowish text-white font-semibold rounded-lg hover:bg-browninsh"
              type="submit"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default ContactComponent;
