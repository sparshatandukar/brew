import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../Card/CoffeeCard';
import FooterComponent from '../footer/FooterComponent';

const TeaComponent = () => {

  const black = [
    {
      imgUrl: "https://www.healthifyme.com/blog/wp-content/uploads/2020/02/Black-Tea-2-1.jpg",
      title: "Classic Black Tea",
    },
    {
      id:"66bb2a7991bdee9b0910669a",
      imgUrl: "https://www.thestatesman.com/wp-content/uploads/2018/07/Assam-Tea.jpg",
      title: "Assam Tea",
    },
    {
      imgUrl: "https://cdn11.bigcommerce.com/s-nbc124/product_images/uploaded_images/health-benefits-to-drinking-darjeeling-tea-pumphreys-coffee.jpg",
      title: "Darjeeling Tea",
    },

  ];

  const milk = [
    {
      id:"66bb2af891bdee9b091066a6",
      imgUrl: "https://ttr.com.my/wp-content/uploads/2023/10/Chhatrapati-Chai-Masala-The-Tea-Republic.webp",
      title: "Masala Milk Tea",
    },
    {
      imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2022/01/Massala-Chai-1741f01.jpg",
      title: "Milk Tea",
    },
    {
      imgUrl: "https://bubblepanda.com/cdn/shop/articles/tiger-bubbletea.jpg?v=1686513432",
      title: "Bubble Milk Tea",
    },
  ];

  const green = [
    {
      imgUrl: "https://hips.hearstapps.com/hmg-prod/images/matcha-tea-health-benefits-nutritionists-1656538803.jpg?crop=0.670xw:1.00xh;0.146xw,0&resize=640:*",
      title: "Matcha Tea",
    },
    {
      imgUrl: "https://expeditionjoecoffee.com/cdn/shop/products/Jasmine-Tea-main_840x.jpg?v=1681154427",
      title: "Jasmine Tea",
    },
    {
      imgUrl: "https://images.ctfassets.net/3s5io6mnxfqz/7qLBsFj52Y1P1Ve4UR1NFY/8cbc338927936afbb8d4ef8714980a3a/sencha-tea.jpeg",
      title: "Sencha Tea",
    }
  ];

  const herbal = [
    {
      id:"66bb24e391bdee9b09106646",
      imgUrl: "https://tegaorganictea.com/cdn/shop/products/BluePeaflowerTea_2_900x.png?v=1601758619",
      title: "Butterfly Pea Flower Tea",
    },
    {
      imgUrl: "https://www.buddhateas.com/media/wysiwyg/product-descriptions/hibiscus/hibiscus-tea-3.jpg",
      title: "Hibiscus Tea",
    },
    {
      imgUrl: "https://images-prod.healthline.com/hlcmsresource/images/chamomile-tea.jpg",
      title: "Chamomile",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-green-100 h-[400px]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/032/358/334/non_2x/a-cup-of-tea-on-a-wooden-table-with-a-sunset-in-the-background-ai-generated-free-photo.jpg"
          alt="Coffee Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white"> Refreshing Tea</h1>
          <p className="text-white mt-4 px-4 text-center max-w-xl">
          Steeped in Tradition, Sipped with Joy: Discover the Art of Tea.
          </p>
        </div>
      </header>

      {/* Coffee Categories */}
      <h1 className='font-sans font-bold text-3xl my-5 text-center'>Black Tea</h1>
      <CoffeeCard data={black} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Milk Tea</h1>
      <CoffeeCard data={milk} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Green Tea</h1>
      <CoffeeCard data={green} />

      <h1 className='font-sans font-bold text-3xl my-6 text-center'>Herbal Tea</h1>
      <CoffeeCard data={herbal} />

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

        <Link to="/coffee" className="flex flex-col items-center space-y-2 hover:text-yellowish">
          <img
            src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg" 
            alt="Coffee"
            className='w-28 h-28 rounded-full object-cover'
          />
          <span className='text-center text-lg'>Coffee</span>
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

export default TeaComponent;
