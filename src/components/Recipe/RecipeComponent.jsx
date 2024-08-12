import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../Card/HomeCard';
import FooterComponent from '../footer/FooterComponent';

const RecipeComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const beverages = [
    {
      imgUrl:"https://www.sidechef.com/recipe/07a4766c-d39e-4dff-8cd3-0b0a538f1d04.jpg?d=1408x1120",
      title: "Cucumber Mint Cooler",
      description: "Stay refreshed with this cool, invigorating blend of cucumber and mint."
    },
    {
      imgUrl: "https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___tropical-protein-smoothie-3.jpg",
      title: "Tropical Smoothie",
      description: "Escape to a tropical paradise with every sip of this fruity delight."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Iced Coffee",
      description: "Beat the heat with our perfectly brewed iced coffee."
    }
  ];

  const winter = [
    {
      imgUrl: "https://plus.unsplash.com/premium_photo-1671660015348-0bfcc2e0b8cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwY2hvY2xhdGV8ZW58MHx8MHx8fDA%3D",
      title: "Hot Chocolate",
      description: "Indulge in the rich, creamy goodness of our classic hot chocolate."
    },
    {
      imgUrl: "https://plus.unsplash.com/premium_photo-1695945389245-dda22a5d364a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mulled Wine",
      description: "Cozy up with a glass of our spiced, aromatic mulled wine."
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak408qT064uchP_TJT_x1Hl_Kb84uJX4tCg&s",
      title: "Irish Coffee",
      description: "Experience a touch of warmth and a kick of Irish charm."
    }
  ];

  const trending = [
    {
      imgUrl: "https://www.seriouseats.com/thmb/x5dQAByuE9saNvybQ4sjTU1dHG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230621-SEA-DalognaCoffee-LorenaMasso-hero-e6a0eb179a2d457fb40c059d91594c35.jpg",
      title: "Dalgona Coffee",
      description: "Indulge in the rich, creamy goodness of our classic hot chocolate."
    },
    {
      imgUrl: "https://cdn.foodaciously.com/static/recipes/f6a4fc8d-74e0-4e76-a8a8-5dd070d05547/butterfly-pea-blue-tea-b7977dcb17849aa2f83aa66182bec3ec-1920-q90.jpg",
      title: "Butterfly Pea Flower Tea",
      description: "Cozy up with a glass of our spiced, aromatic mulled wine."
    },
    {
      imgUrl: "https://feynman.coffee/cdn/shop/products/DirtyMatcha-01_2048x.jpg?v=1617538456",
      title: "Dirty Matcha Latte",
      description: "Experience a touch of warmth and a kick of Irish charm."
    }
  ];

  const filteredBeverages = beverages.filter(beverage =>
    beverage.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWinter = winter.filter(drink =>
    drink.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTrending = trending.filter(drink =>
    drink.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='bg-lightGrey h-20 w-auto mt-4 shadow-lg flex justify-around'>
        <div className='flex justify-between items-center p-4'>
          <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 w-full max-w-screen-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search recipes..."
              className="border-lightGrey p-2 rounded w-full md:w-96"
            />
            <button type="submit" className="p-2 bg-yellowish text-white rounded w-24">
              Search
            </button>
            <button
              className="md:hidden ml-4 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-700 hover:text-yellowish" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </form>
          <div className="hidden md:flex space-x-4 mx-6 ">
            <Link to="/coffee">Coffee</Link>
            <Link to="/cocktails">Cocktails</Link>
            <Link to="/mocktails">Mocktails</Link>
            <Link to="/teas">Teas</Link>
            <Link to="/smoothies">Smoothies</Link>
            <Link to="/juices">Juices</Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-lightGrey">
          <ul>
            <li><Link to="/coffee" className="block text-sm px-2 py-4 text-black hover:bg-yellowish font-semibold transition duration-300">Coffee</Link></li>
            <li><Link to="/cocktails" className="block text-sm text-black px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Cocktails</Link></li>
            <li><Link to="/mocktails" className="block text-sm text-black px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Mocktails</Link></li>
            <li><Link to="/teas" className="block text-sm text-black px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Teas</Link></li>
            <li><Link to="/smoothies" className="block text-sm text-black px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Smoothies</Link></li>
            <li><Link to="/juices" className="block text-sm text-black px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Juices</Link></li>
          </ul>
        </div>
      )}

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Summer Refreshers</h1>
      {filteredBeverages.length > 0 ? <HomeCard data={filteredBeverages} /> : <p className="text-center">No results found.</p>}

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Winter Drinks</h1>
      {filteredWinter.length > 0 ? <HomeCard data={filteredWinter} /> : <p className="text-center">No results found.</p>}

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Trending Drinks</h1>
      {filteredTrending.length > 0 ? <HomeCard data={filteredTrending} /> : <p className="text-center">No results found.</p>}

      <FooterComponent />
    </>
  );
};

export default RecipeComponent;
