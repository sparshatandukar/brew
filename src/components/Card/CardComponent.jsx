import React from "react";
import { useNavigate } from 'react-router-dom';

const CardComponent = (props) => {
  const navigate = useNavigate();

  const handleLearnMore = (title) => {
    if (title === "Coffee") {
      navigate('/coffee');
    } else if (title === "Cocktail") {
      navigate('/cocktails');
    } else if (title === "Mocktail") {
      navigate('/cocktails');
    } else {
      navigate(`/recipe/${title}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {props.data.map((main, index) => {
          return (
            <div className="rounded-lg  overflow-hidden shadow-lg bg-lightGrey" key={index}>
              <img
                className="w-full h-48 object-cover center"
                src={main.imgUrl}
                alt="beverage"
              />
              <div className="p-4">
                <div className="font-bold text-xl mb-2"> {main.title}</div>
                <p className="text-gray-700 text-base">{main.description}</p>
              </div>
              <div className="px-6 py-4 text-left">
                <button className="bg-yellowish text-black px-5 py-2 text-center" 
              onClick={() => handleLearnMore(main.title)}
                
                >
                  Learn more..
                </button>
              </div>
            </div>
            
          );
        })}
      </div>
    </>
  );
};

export default CardComponent;