import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = (props) => {
  const navigate = useNavigate();

  const handleLearnMore = (title) => {
    if (title === "Cucumber Mint Cooler") {
      navigate('/cucumber');
    } else if (title === "Tropical Smoothie") {
      navigate('/tropical');
    } else if (title === "Iced Coffee") {
      navigate('/icedCoffee');
    } else {
      navigate(`/recipe/${title}`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center p-4">
      {props.data.map((product, index) => (
        <div
          className="rounded-lg overflow-hidden shadow-lg bg-lightGrey m-2 w-96"
          key={index}
        >
          <img
            className="w-full h-72 object-cover p-4"
            src={product.imgUrl}
            alt="beverage"
          />
          <div className="p-3">
            <div className="font-bold text-lg mb-1">{product.title}</div>
            <p className="text-gray-700 text-sm">{product.description}</p>
          </div>
          <div className="px-4 py-2 text-left">
            <button
              className="bg-yellowish text-black px-4 py-2 rounded-md"
              onClick={() => handleLearnMore(product.title)}
            >
              Learn more..
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
