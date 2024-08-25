import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../Card/CoffeeCard';
import FooterComponent from '../footer/FooterComponent';

const CoffeeComponent = () => {

  const iced = [
    {
      imgUrl: "https://diethood.com/wp-content/uploads/2023/08/iced-americano-3.jpg",
      title: "Iced Americano",
    },
    {
      imgUrl: "https://130529051.cdn6.editmysite.com/uploads/1/3/0/5/130529051/s444124611972565011_p236_i2_w1920.jpeg",
      title: "Iced Cappuccino",
    },
    {
      id:"66bb20b991bdee9b0910660e",
      imgUrl: "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/2819/18201/P071422183748_1__66386.1690917599.jpg?c=2",
      title: "Iced Coffee",
    },
    {
      imgUrl: "https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-image-square.jpg",
      title: "Iced Mocha",
    },
    {
      imgUrl: "https://www.thecookierookie.com/wp-content/uploads/2021/07/featured-iced-caramel-macchiato-recipe.jpg",
      title: "Iced Macchiato",
    },
  ];

  const hot = [
    {
      imgUrl: "https://cdn.rizopouloscoffee.gr/www/rizopoulos-coffee-espresso.jpg",
      title: "Espresso",
    },
    {
      imgUrl: "https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg",
      title: "Americano",
    },
    {
      imgUrl: "https://cloud.starkinsider.com/wp-content/uploads/2023/06/How-to-make-better-latte-art-681x701.webp",
      title: "Latte",
    },
    {
      imgUrl: "https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?fm=pjpg&w=1000&q=95",
      title: "Cappuccino",
    },
    {
      imgUrl: "https://thelittlestcrumb.com/wp-content/uploads/espresso-macchiato-featured-image-1.jpg",
      title: "Macchiato",
    },
    {
      imgUrl: "https://www.thespruceeats.com/thmb/5PcCBEaUd1U1eFxfcKKPLVnZzfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/affogato-4776668-hero-08-40d7a68d12ba46f48eaea3c43aba715c.jpg",
      title: "Affogato",
    },
  ];

 
  const frappe = [
    {
      imgUrl: "https://onesweetappetite.com/wp-content/uploads/2022/01/Mocha-Frappe-11.jpg",
      title: "Mocha Frappe",
    },
    {
      imgUrl: "https://quanta-egypt.com/wp-content/uploads/winter_vanilla_white_chocolate-1024x1024.jpg",
      title: "Vanilla Frappe",
    },
    {id:"66bb274491bdee9b09106663",
      imgUrl: "https://freshbeanbakery.com/wp-content/uploads/2023/06/CaramelFrap-Photo3-683x1024.jpg",
      title: "Caramel Frappe",
    },
    {
      imgUrl: "https://www.ibcsimply.com/wp-content/uploads/2023/03/Triple-Chocolate-Cookie-Frappe-scaled-e1678704215350.jpg",
      title: "Chocolate Frappe",
    },
    {
      imgUrl: "https://frederikkewaerens.dk/wp-content/uploads/2023/07/Frederikke-Waerens-Oreo-Frappe-11-scaled-1.jpeg",
      title: "Oreo Frappe",
    },
    {
      imgUrl: "https://static.wixstatic.com/media/5037e9_7e1f594c627f48aa98a181d6438df1a6~mv2.jpg/v1/fill/w_640,h_726,al_c,lg_1,q_85,enc_auto/5037e9_7e1f594c627f48aa98a181d6438df1a6~mv2.jpg",
      title: "Strawberry Frappe",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://www.mashed.com/img/gallery/types-of-coffee-explained/l-intro-1655904387.jpg"
          alt="Coffee Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">Coffee & More</h1>
          <p className="text-white mt-4 px-4 text-center max-w-xl">
            Discover a world of rich flavors and aromatic delights in our curated coffee collection.
          </p>
        </div>
      </header>

      {/* Coffee Categories */}
      <h1 className='font-sans font-bold text-3xl my-5 text-center'>Cold Coffee</h1>
      <CoffeeCard data={iced} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Hot Coffee</h1>
      <CoffeeCard data={hot} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Frappe</h1>
      <CoffeeCard data={frappe} />

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

        <Link to="/mocktails" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://theallnaturalvegan.com/wp-content/uploads/2023/05/dragon-fruit-mojito.jpg" // Replace with actual image URL
            alt="Mocktails"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Mocktails</span>
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

export default CoffeeComponent;
