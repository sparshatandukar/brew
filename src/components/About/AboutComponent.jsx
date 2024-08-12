import React from 'react';
import FooterComponent from '../footer/FooterComponent';
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";


const AboutComponent = () => {
  return (
    <>
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="md:w-1/2 mt-2">
          <img
            src="https://img.freepik.com/premium-photo/glass-juice-with-cherry-top_948735-193719.jpg" // Replace with your image URL
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
          <div className="flex space-x-7 mt-4 justify-start">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <TiSocialFacebook className='h-14 w-9' />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
            <SlSocialInstagram className='h-14 w-7' />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
            <TiSocialLinkedin className='h-14 w-10'  />
            </a>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:pl-12">
          <h1 className="text-5xl md:text-6xl font-bold text-yellowish mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
            At Blend & Brew, we are passionate about bringing together a global community of beverage enthusiasts. Our platform is dedicated to sharing and discovering unique and delightful drink recipes, from classic brews to innovative creations. We aim to inspire and connect people through the art of crafting beverages, offering a space where creativity flows and every sip tells a story. Our mission is to serve as your ultimate guide to exploring, creating, and enjoying the world’s most refreshing and flavorful drinks.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Beyond just recipes, Blend & Brew is a celebration of the rich culture and traditions that beverages embody. We believe that every drink has a story, and through our curated collections, seasonal specials, and trending recipes, we strive to highlight the diversity and creativity of drink-making. Whether you're looking to master your favorite coffee brew, experiment with a new cocktail, or simply find inspiration in the world of beverages, we're here to support your journey and bring a touch of delight to every sip.
          </p>
        </div>
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default AboutComponent;
