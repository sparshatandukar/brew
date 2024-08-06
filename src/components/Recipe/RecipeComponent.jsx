import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../Card/HomeCard';
import FooterComponent from '../footer/FooterComponent';
// import CucumberComponent from '../Cucumber/CucumberComponent';
// import TropicalComponent from '../Tropical/TropicalComponent';
// import IcedCoffee from '../IcedCoffee/IcedCoffeeComponent';


const RecipeComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
   
  };

  const beverages = [
    {
      imgUrl:"https://www.sidechef.com/recipe/07a4766c-d39e-4dff-8cd3-0b0a538f1d04.jpg?d=1408x1120",
      title: "Cucumber Mint Cooler",
      description:
      "Stay refreshed with this cool, invigorating blend of cucumber and mint."
    },
    {
        imgUrl:
          "https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___tropical-protein-smoothie-3.jpg",
        title: "Tropical Smoothie",
        description:
        "Escape to a tropical paradise with every sip of this fruity delight."
      },
      {
        imgUrl:
          "https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Iced Coffee",
        description:
        "Beat the heat with our perfectly brewed iced coffee."
      }
    ]
      const winter=[
      {
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1671660015348-0bfcc2e0b8cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwY2hvY2xhdGV8ZW58MHx8MHx8fDA%3D",
        title: "Hot Chocolate",
        description:
        "Indulge in the rich, creamy goodness of our classic hot chocolate."
      },
      {
          imgUrl:
            "https://plus.unsplash.com/premium_photo-1695945389245-dda22a5d364a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Mulled Wine",
          description:
          "Cozy up with a glass of our spiced, aromatic mulled wine."
        },
        {
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak408qT064uchP_TJT_x1Hl_Kb84uJX4tCg&s",
          title: "Irish Coffee",
          description:
          "Experience a touch of warmth and a kick of Irish charm."
        }
      ]




  return (
    <>

    <div className='bg-lightGrey h-20 w-auto mt-4 shadow-lg flex justify-evenly'>
      <div className='flex p-4 space-x-12 px-13 items-center'>
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className="border-lightGrey p-2 rounded w-96"
          />
          <button type="submit" className="p-2 bg-yellowish text-white rounded w-24">
            Search
          </button>
        </form>
        <Link to="/coffee" className="">Coffee</Link>
        <Link to="/cocktails" className="">Cocktails</Link>
        <Link to="/mocktails" className="">Mocktails</Link>
        <Link to="/teas" className="">Teas</Link>
        <Link to="/smoothies" className="">Smoothies</Link>
        <Link to="/juices" className="">Juices</Link>
      </div>
        
        
    </div>
        <h1 className=' font-sans font-bold text-3xl my-6 text-center'>Summer Refreshers</h1>
         <HomeCard data={beverages} />
         <h1 className=' font-sans font-bold text-3xl my-6 text-center'>Winter Drinks</h1>
         <HomeCard data={winter}/>
    <FooterComponent/>
</>
  );
};

export default RecipeComponent;
