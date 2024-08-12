import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../Card/CoffeeCard';
import FooterComponent from '../footer/FooterComponent';

const MocktailComponent = () => {

  const fruity = [
    {
      imgUrl: "https://doublethespoonfuls.com/wp-content/uploads/2024/01/cinderella-mocktail-2.jpg",
      title: "Cindrella",
    },
    {
      imgUrl: "https://platedcravings.com/wp-content/uploads/2022/06/Virgin-Pina-Colada-Plated-Cravings-9.jpg",
      title: "Virgin Pina Colada",
    },
    {
      imgUrl: "https://pinkowlkitchen.com/wp-content/uploads/2022/07/honey-blackberry-smash-mocktail-side.jpg",
      title: "Berry Smash",
    },
    {
      imgUrl: "https://alcipedia.com/wp-content/uploads/Mango-Tango-Cocktail.jpeg",
      title: "Mango Tango",
    },
    {
      imgUrl: "https://www.kroger.com/content/v2/binary/recipe/images/5e1f41159da07c34418ddbf2-original.jpg",
      title: "Citrus Cooler",
    },
  ];

  const herb = [
    {
      imgUrl: "https://mocktails.store/wp-content/uploads/2023/08/virgin-mojito-3.png",
      title: "Virgin Mojito",
    },
    {
      imgUrl: "https://www.loveandoliveoil.com/wp-content/uploads/2011/08/basil-lemonade.jpg",
      title: "Basil Lemonade",
    },
    {
      imgUrl: "https://bigycloud.relationshop.net/RSData/recipes/02032021125522_RosemaryInfusedDrink400x400.jpg",
      title: "Rosemary Grapefruit Fizz",
    },
    {
      imgUrl: "https://static.toiimg.com/photo/84671385.cms",
      title: " Cucumber Mint Cooler",
    },
    {
      imgUrl: "https://sweetsavorysour.com/wp-content/uploads/2019/06/lrm_export_10799813648159_20190626_2156584341048891702.jpeg",
      title: "Lavender Lemonade",
    },
  ];

  const tropical = [
    {
      imgUrl: "https://shottbeverages.com/wp-content/uploads/2019/07/AdobeStock_55977264_small.jpg",
      title: "Mango Mule",
    },
    {
      imgUrl: "https://alushlifemanual.com/wp-content/uploads/2021/08/Virgin-Mai-Tai-recipe-500x375.jpg",
      title: "Virgin Mai Tai",
    },
    {
      imgUrl: "https://www.taketwotapas.com/wp-content/uploads/2017/11/Lime-in-the-Coconut-Cooler-5.jpg.webp",
      title: "Coconut Lime Cooler",
    },
    {
      imgUrl: "https://sweetsandthankyou.com/wp-content/uploads/2022/01/Sweet-Sunrise-Mocktail23-2.jpg",
      title: "Tropical Sunrise",
    },
    {
      imgUrl: "https://www.eatloveeats.com/wp-content/uploads/2022/12/Passionfruit-Mocktail-Featured.jpg",
      title: "Passion Fruit Mocktail",
    }
  ];

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://www.spoton.com/blog/content/images/2023/08/Mocktail--zero-proof-cocktails--and-different-non-alcoholic-drinks.jpeg"
          alt="Mocktail Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">Mocktails</h1>
          <p className="text-white text-base mt-4 px-4 text-center max-w-xl">
          Refresh, Revitalize, Repeat: Dive into a World of Flavorful Mocktails!
          </p>
        </div>
      </header>

      {/* Coffee Categories */}
      <h1 className='font-sans font-bold text-3xl my-5 text-center'>Fruit-Based Mocktails</h1>
      <CoffeeCard data={fruity} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Herb-Infused Mocktails</h1>
      <CoffeeCard data={herb} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Tropical Mocktails</h1>
      <CoffeeCard data={tropical} />

      <h1 className='font-sans font-bold text-2xl my-6 text-center'>View More Categories</h1>
      <div className='bg-gray-50 h-auto w-full mt-4 shadow-lg flex justify-evenly items-center p-4'>

        <Link to="/cocktails" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://thelocalbartender.com/wp-content/uploads/2023/01/blue-spin-cocktail-1.png?w=750" // Replace with actual image URL
            alt="Cocktails"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Cocktails</span>
        </Link>

        <Link to="/coffee" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg" 
            alt="Coffee"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Coffee</span>
        </Link>

        <Link to="/teas" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://www.dietitianshreya.com/wp-content/uploads/2021/05/TEA.jpg" // Replace with actual image URL
            alt="Teas"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Teas</span>
        </Link>

        <Link to="/smoothies" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://www.eatingwell.com/thmb/CokPYaf2YPnPACHBls_LVhyUp0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthy-breakfast-smoothie-8029983-4000x4000-3e02d40929c8410c877a171a235c99bc.jpg" // Replace with actual image URL
            alt="Smoothies"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Smoothies</span>
        </Link>
        <Link to="/juices" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/orange-juice-recipe.jpg" // Replace with actual image URL
            alt="Juices"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Juices</span>
        </Link>
      </div>

      {/* Footer Section */}
      <FooterComponent />
    </>
  );
};

export default MocktailComponent;
