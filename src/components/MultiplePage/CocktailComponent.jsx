import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../Card/CoffeeCard';
import FooterComponent from '../footer/FooterComponent';

const CocktailComponent = () => {

  const sour = [
    {
      imgUrl: "https://img.delicious.com.au/p_VrvMWZ/w759-h506-cfill/del/2020/12/whiskey-sour-143899-1.jpg",
      title: "Whiskey Sour",
    },
    {
      imgUrl: "https://dishesdelish.com/wp-content/uploads/2022/01/Cadillac-Margarita-14.jpg.webp",
      title: "Margarita",
    },
    {
      imgUrl: "https://d34nm4jmyicdxh.cloudfront.net/eyJidWNrZXQiOiJjaHJpc3N5LXR1eGVkby1ubzIiLCJrZXkiOiJyZWNpcGUtZGFpcXVpcmktY29ja3RhaWwtcmVjaXBlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjYwMCwiZml0IjoiY292ZXIifX19",
      title: "Daiquiri",
    },
    {
      imgUrl: "https://assets.epicurious.com/photos/642da48b9fa87dfb969d9093/1:1/w_2560%2Cc_limit/PiscoSour_RECIPE_033123_50539.jpg",
      title: "Pisco Sour",
    },
    {
      imgUrl: "https://imbibemagazine.com/wp-content/uploads/2022/02/web-brandy-sidecar-crdt-john-valls.jpg",
      title: "Sidecar",
    },
  ];

  const spirit = [
    {
      imgUrl: "https://www.liquor.com/thmb/YIS3-c_-E2ZdCR5kYtPmF8SMN7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/brandy-old-fashioned-720x720-primary-4416daf388d440fb852f824febdc2557.jpg",
      title: "Old Fashioned",
    },
    {
      imgUrl: "https://www.allrecipes.com/thmb/bU0nAuF70D9fY__AaVVHr5Pfjuw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221893-vodka-martini-cocktail-DDMFS-4x3-1b2e90f80aae4627beaca1e0aec38af4.jpg",
      title: "Martini",
    },
    {
      imgUrl: "https://www.thespruceeats.com/thmb/P2AAhIxjfFwXWGIjhZfhwCVcp94=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/negroni-cocktail-recipe-759327-hero-01-3e157f628ade43f1969793447c5ff51d.jpg",
      title: "Negroni",
    },
    {
      imgUrl: "https://www.acouplecooks.com/wp-content/uploads/2020/03/Manhattan-Cocktail-059s2.jpg",
      title: "Manhattan",
    },
    {
      imgUrl: "https://vintageamericancocktails.com/wp-content/uploads/2021/01/boulevardier.jpg",
      title: "Boulevardier",
    },

  ];

  const sparkling = [
    {
      imgUrl: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/recipes_1200_800_fallback/public/2023-02/mimosa-cocktail%C2%A9iStock.jpg?itok=5bk3bKL9",
      title: "Mimosa",
    },
    {
      imgUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/french-75.jpg",
      title: "French 75",
    },
    {
      imgUrl: "https://cookieandkate.com/images/2019/07/best-peach-bellini-recipe-4.jpg",
      title: "Belini",
    },
    {
      imgUrl: "https://theartoffoodandwine.com/wp-content/uploads/2023/01/IMG_5154.jpg",
      title: "Kir Royale",
    },
    {
      imgUrl: "https://recipes.net/wp-content/uploads/2023/05/aperol-spritz-cocktail-recipe_e7405d5374d11cec502e02262181c20f.jpeg",
      title: "Aperol Spritz",
    }
  ];

  const hot = [
    {
      imgUrl: "https://indiaphile.info/wp-content/uploads/2023/11/stp-hot-toddy-6424.jpg",
      title: "Hot Toddy",
    },
    {
      imgUrl: "https://chilledmagazine.com/wp-content/uploads/2023/12/irish-coffee.png",
      title: "Irish Coffee",
    },
    {
      imgUrl: "https://www.thebottleclub.com/cdn/shop/articles/Mulled_Wine_Cocktail_Recipe_2260x.jpg?v=1703659638",
      title: "Mulled Wine",
    },
    {
      imgUrl: "https://www.forkinthekitchen.com/wp-content/uploads/2020/10/201007.spiced.hot_.buttered.rum-4838-1-1-600x600.jpg",
      title: "Hot Buttered Rum",
    },
    {
      imgUrl: "https://cookienameddesire.com/wp-content/uploads/2017/01/bourbon-spiked-hot-chocolate-recipe.jpg",
      title: "Spiked Hot Chocolate",
    },

  ];

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://img.pastemagazine.com/wp-content/uploads/2022/05/21082555/cocktails-rec.png"
          alt="Cocktail Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">Cocktails & More</h1>
          <p className="text-white mt-4 px-4 text-center max-w-xl">
          Shake, Stir, Sip: Discover Your Next Favorite Cocktail Creation!
          </p>
        </div>
      </header>

      {/* Coffee Categories */}
      <h1 className='font-sans font-bold text-3xl my-5 text-center'>Sour Cocktails</h1>
      <CoffeeCard data={sour} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Spirit-Forward Cocktails</h1>
      <CoffeeCard data={spirit} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Sparkling Cocktails</h1>
      <CoffeeCard data={sparkling} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Hot Cocktails</h1>
      <CoffeeCard data={hot} />

      <h1 className='font-sans font-bold text-2xl my-6 text-center'>View More Categories</h1>
      <div className='bg-gray-50 h-auto w-full mt-4 shadow-lg flex justify-evenly items-center p-4'>

      <Link to="/coffee" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg" 
            alt="Coffee"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Coffee</span>
        </Link>

        <Link to="/mocktails" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://theallnaturalvegan.com/wp-content/uploads/2023/05/dragon-fruit-mojito.jpg" 
            alt="Mocktails"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Mocktails</span>
        </Link>

        <Link to="/teas" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://www.dietitianshreya.com/wp-content/uploads/2021/05/TEA.jpg" 
            alt="Teas"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Teas</span>
        </Link>

        <Link to="/smoothies" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://www.eatingwell.com/thmb/CokPYaf2YPnPACHBls_LVhyUp0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthy-breakfast-smoothie-8029983-4000x4000-3e02d40929c8410c877a171a235c99bc.jpg" 
            alt="Smoothies"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Smoothies</span>
        </Link>
        <Link to="/juices" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/orange-juice-recipe.jpg" 
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

export default CocktailComponent;
