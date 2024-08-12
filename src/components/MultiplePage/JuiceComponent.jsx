import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../Card/CoffeeCard';
import FooterComponent from '../footer/FooterComponent';

const JuiceComponent = () => {

  const citrus = [
    {
      imgUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/orange-juice-recipe.jpg",
      title: "Orange Juice",
    },
    {
      imgUrl: "https://healthwire.pk/wp-content/uploads/2022/07/benefits-of-grapefruit-juice.jpg",
      title: "Grapefruit Juice",
    },
    {
      imgUrl: "https://www.happyfoodstube.com/wp-content/uploads/2017/02/Homemade-Anti-Aging-Citrus-Juice.jpg",
      title: "Citrus Blend",
    }
  ];

  const vegetable = [
    {
      imgUrl: "https://saturn.health/cdn/shop/articles/carrot_juice_benefits_for_skin.jpg?v=1675514291",
      title: "Carrot Juice",
    },
    {
      imgUrl: "https://cdn1.foodviva.com/static-content/food-images/juice-recipes/beetroot-juice-recipe/beetroot-juice-recipe.jpg",
      title: "Beet Juice",
    },
    {
      imgUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/cucumber-juice-recipe.jpg",
      title: "Cucumber Juice",
    },
    {
      imgUrl: "https://cdn1.foodviva.com/static-content/food-images/juice-recipes/homemade-tomato-juice-recipe/homemade-tomato-juice-recipe.jpg",
      title: "Tomato Juice",
    }
  ];

  const fruit = [
    {
      imgUrl: "https://theallnaturalvegan.com/wp-content/uploads/2023/09/tropical-fruit-juice-recipe.jpg",
      title: "Tropical Punch",
    },
    {
      imgUrl: "https://healthiersteps.com/wp-content/uploads/2021/05/pineapple-mango-juice.jpg",
      title: "Mango Pineapple Juice",
    },
    {
      imgUrl: "https://s3.envato.com/files/270403862/DSC_3096.jpg",
      title: "Peach Apricot Juice",
    },
    {
      imgUrl: "https://www.throughthefibrofog.com/wp-content/uploads/2022/04/pear-apple-juice-in-two-bottles.jpg",
      title: "Apple Pear Juice",
    }
  ];

  const exotic = [
    {
      imgUrl: "https://colorfulsuperfoodie.com/wp-content/uploads/2023/07/066A4091_adobe_express.jpeg",
      title: "Dragon Fruit Juice",
    },
    {
      imgUrl: "https://www.thelittleepicurean.com/wp-content/uploads/2021/03/passionfruit-juice-1.jpg",
      title: "Passion Fruit Juice",
    },
    {
      imgUrl: "https://extremewellnesssupply.com/cdn/shop/articles/7121e0bc570a942863e578951e9bba41_600x.jpg?v=1676283072",
      title: "Pomegranate Juice",
    },
    {
      imgUrl: "https://i.pinimg.com/originals/3f/f8/a3/3ff8a39a6a067aaf42d8edcbab5b6008.jpg",
      title: "Starfruit Juice",
    }
  ];

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/035/053/317/non_2x/ai-generated-background-chinese-tea-drink-dragon-ai-generated-photo.jpg"
          alt="Juice Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">Delicious Juices</h1>
          <p className="text-white mt-4 px-4 text-center max-w-xl">
          Juice Up Your Day: Pure Refreshment in Every Sip!
          </p>
        </div>
      </header>

      {/* Coffee Categories */}
      <h1 className='font-sans font-bold text-3xl my-5 text-center'>Citrus Juices</h1>
      <CoffeeCard data={citrus} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Vegetable Juices</h1>
      <CoffeeCard data={vegetable} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Fruit Blends</h1>
      <CoffeeCard data={fruit} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Exotic Juices</h1>
      <CoffeeCard data={exotic} />

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
        <Link to="/coffee" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg" 
            alt="Coffee"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Coffee</span>
        </Link>
      </div>

      {/* Footer Section */}
      <FooterComponent />
    </>
  );
};

export default JuiceComponent;
