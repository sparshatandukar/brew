import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../Card/CoffeeCard';
import FooterComponent from '../footer/FooterComponent';

const SmoothieComponent = () => {

  const fruit = [
    {
      imgUrl: "https://recipes.net/wp-content/uploads/2023/05/berry-blast-breakfast-smoothie-recipe_43a3d35abf3c5654c26b47f6af4c7074.jpeg",
      title: "Berry Blast",
    },
    {
      id:"66bb1b30250a5d88227f3a4b",
      imgUrl: "https://www.dinneratthezoo.com/wp-content/uploads/2016/08/tropical-smoothie-14.jpg",
      title: "Tropical Smoothie",
    },
    {
      imgUrl: "https://food.unl.edu/recipes/strawberry-banana-smoothie.jpg",
      title: "Strawberry Banana",
    },
    {
      imgUrl: "https://img.freepik.com/premium-photo/top-view-minimalistic-isolated-peach-paradise-smoothie_759095-160449.jpg",
      title: "Peach Paradise",
    },
    {
      imgUrl: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/AFE51C13-62F1-4BA9-9AFC-5E25007B599A/Derivates/46C97A44-BCA5-4055-ACB3-6B4AF96EBADB.jpg ",
      title: "Sunrise Smoothie",
    },
  ];

  const protein = [
    {
      imgUrl: "https://www.simplyrecipes.com/thmb/z2BhuKnd7RCHViYFg1E4J_IGkS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Peanut-Butter-Banana-Smoothie-LEAD-4_RECIRC-af849a5c756143aa88c80b727a44cbaf.jpg",
      title: "Peanut Butter Banana",
    },
    {
      imgUrl: "https://www.makingthymeforhealth.com/wp-content/uploads/2015/04/Superfood-Chocolate-Almond-Smoothie-_-3.jpg",
      title: "Chocolate Almond Protein",
    },
    {
      imgUrl: "https://www.wellplated.com/wp-content/uploads/2019/01/Peanut-Butter-Oatmeal-Smoothie.jpg",
      title: "Oatmeal Protein Smoothie",
    },
    {
      imgUrl: "https://www.crazyinspiredlife.com/wp-content/uploads/2018/02/smoothie-hero-2.jpg",
      title: "Green Protein Power",
    },
    {
      imgUrl: "https://choosingchia.com/jessh-jessh/uploads/2020/04/classic-vanilla-chia-pudding-6.jpg",
      title: "Vanilla Chia Smoothie",
    }

  ];

  const green = [
    {
      imgUrl: "https://media.bluediamond.com/uploads/2023/01/24174458/Island_Green_Smoothie_v1.jpg",
      title: "Classic Green Smoothie",
    },
    {
      imgUrl: "https://www.thelittleepicurean.com/wp-content/uploads/2015/02/avocado-kale-smoothie.jpg",
      title: "Avocado Kale",
    },
    {
      imgUrl: "https://aurorasatler.com/wp-content/uploads/2020/07/green-smoothie.jpg",
      title: "Cucumber Spinach",
    },
    {
      imgUrl: "https://www.purelykaylie.com/wp-content/uploads/2021/02/Simple-Green-Smoothie-6.jpg",
      title: "Mango Green",
    },
    {
      imgUrl: "https://www.spendwithpennies.com/wp-content/uploads/2021/07/Kiwi-Smoothie-SpendWithPennies-5.jpg",
      title: "Kiwi Green",
    }
  ];

  const desert = [
    {
      id:"66bb2c6d91bdee9b091066bc",
      imgUrl: "https://www.ambitiouskitchen.com/wp-content/uploads/2021/04/Chocolate-Peanut-Butter-Banana-Smoothie-5.jpg",
      title: "Chocolate Peanut Butter",
    },
    {
      imgUrl: "https://sweetsavoryandsteph.com/wp-content/uploads/2022/11/SB_novemberrecipes43.jpg",
      title: "Vanilla Bean",
    },
    {
      imgUrl: "https://lh5.googleusercontent.com/proxy/BeDcCqZ2pMGeJkrV6i0-Lxx_C2eOyGFrfBTJq3zVtQIwnuK97dKzOHET7bmQcaxr7QSi8HzakPQq0GadWQAfp7me-vbfBwUgcyPo_GKkl0D3Ea1x1u4",
      title: "Coconut Cream Pie",
    },
    {
      imgUrl: "https://www.peanutbutterandfitness.com/wp-content/uploads/2020/06/IMG_3019.jpg",
      title: "Berry Cheesecake",
    },
    {
      imgUrl: "https://www.mornflake.com/wp-content/uploads/2020/02/Mint-Chocolate-Chip-Smoothie-WP.jpg ",
      title: "Mint Chocolate Chip",
    }

  ];

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://housegrail.com/wp-content/uploads/2021/12/fruit-smoothie-recipes.jpg"
          alt="Smoothie Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">Delicious and Healthy Smoothies</h1>
          <p className="text-white mt-4 px-4 text-center max-w-xl">
          Blend Your Day with Fresh Flavors: Sip the Goodness of Smoothies!
          </p>
        </div>
      </header>

      {/* Coffee Categories */}
      <h1 className='font-sans font-bold text-3xl my-5 text-center'>Fruit Smoothie</h1>
      <CoffeeCard data={fruit} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Protein Smoothie</h1>
      <CoffeeCard data={protein} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Green Smoothie</h1>
      <CoffeeCard data={green} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Dessert Smoothie</h1>
      <CoffeeCard data={desert} />

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

        <Link to="/coffee" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg" 
            alt="Coffee"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Coffee</span>
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

export default SmoothieComponent;
