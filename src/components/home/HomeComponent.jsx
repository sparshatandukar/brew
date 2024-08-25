import React from 'react';
import CardComponent from '../Card/CardComponent';
import SecondCard from '../Card/SecondCard';
import FooterComponent from '../footer/FooterComponent';

const HomeComponent = () => {
    const beverages = [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1670722111236-a8b246ed70fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D",
          title: "Coffee",
          description:
            "Dive into the rich and aromatic universe of coffee, where each sip promises to invigorate your senses and elevate your day. From classic brews to creative concoctions, explore recipes that cater to every coffee lover’s palate.",
        },
        {
            imgUrl:
              "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D",
            title: "Cocktail",
            description:
              "Shake up your mixology skills with our tantalizing cocktail recipes. Whether you’re a seasoned bartender or a home enthusiast, our diverse selection of cocktails will inspire you to craft the perfect drink for any occasion.",
          },
          {
            imgUrl:
              "https://images.unsplash.com/photo-1634496064950-02f043806b09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mocktail",
            description:
              "Enjoy the fun without the alcohol with our refreshing mocktail recipes. Perfect for all ages and preferences, these non-alcoholic delights offer a burst of flavor and creativity, making every gathering a memorable one.",
          }
    ]

    const recipes = [
        {
          id:"66bb20b991bdee9b0910660e",
          imgUrl:
            "https://static01.nyt.com/images/2019/06/03/dining/kc-vietnamese-iced-coffee/kc-vietnamese-iced-coffee-square640.jpg",
          title: "Iced Coffee",
          description:
            "Cool off with a refreshing iced coffee—bold, smooth, and served over ice. Perfect for a quick pick-me-up on a hot day!",
        },
        {
          id:"2",
            imgUrl:
              "https://img.jamieoliver.com/home/wp-content/uploads/2019/11/5.Espresso_martini_102.jpg",
            title: "Espresso Martini",
            description:
              "Elevate your evening with an Espresso Martini—rich espresso meets vodka in this sophisticated cocktail, offering a smooth blend of coffee and spirit.",
          },
          {
            id:"3",
            imgUrl:
              "https://plus.unsplash.com/premium_photo-1720446081012-ca001fa60011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluYSUyMGNvbGFkYXxlbnwwfHwwfHx8MA%3D%3D",
            title: "Virgin Pina Colada",
            description:
              "Tropical Bliss in Every Sip: Your Non-Alcoholic Escape!",
          }
    ]
  
    return (
        <>
            <div className='relative w-auto h-96 md:h-screen overflow-hidden'>
                <img src="https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero" className='object-cover w-full h-full' />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to Our Beverage Haven</h1>
                    <p className='text-xl md:text-2xl'>Discover delightful drinks and elevate your sipping experience.</p>
                </div>
            </div>
            <CardComponent data={beverages} />
            <h1 className="text-2xl font-bold text-center my-8">Recent Recipes</h1>
            <SecondCard data={recipes} />
            <FooterComponent />
        </>
    );
};

export default HomeComponent;
