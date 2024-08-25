import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = (props) => {
  const navigate = useNavigate();

  const handleLearnMore = (title,id) => {
      navigate(`/${title}/${id}`);
    
  };
console.log(props.data)
  return (
    <div className="flex flex-wrap justify-center p-4">
      {props.data.map((product, index) => (
        <div
          className="rounded-lg overflow-hidden shadow-lg bg-lightGrey m-2 w-96"
          key={index}
        >
          <img
            className="w-full h-72 object-cover p-4"
            src={product?.imgUrl}
            alt="beverage"
          />
          <div className="p-3">
            <div className="font-bold text-lg mb-1">{product.title}</div>
            <p className="text-gray-700 text-sm">{product.description}</p>
          </div>
          <div className="px-4 py-2 text-left">
            <button
              className="bg-yellowish text-black px-4 py-2 rounded-md"
              onClick={() => handleLearnMore(product.title,product.id)}
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
