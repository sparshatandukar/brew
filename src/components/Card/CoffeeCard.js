import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CoffeeCard = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleLearnMore = (title,id) => {
      navigate(`/${title}/${id}`);
    
  };
  // Set the number of visible cards
  const visibleCards = 3;

  const handleNext = () => {
    // Ensure we don't exceed the available cards
    if (currentIndex < props.data.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    // Ensure we don't go below zero
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full ${
          currentIndex >= props.data.length - visibleCards
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={currentIndex >= props.data.length - visibleCards}
      >
        &gt;
      </button>

      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
      >
        {props.data.map((coffee, index) => (
          <div
            className="flex-shrink-0 w-1/3 p-4"
            key={index}
          >
            <div className="rounded-sm overflow-hidden shadow-2xl bg-gray-100">
              <img
                className="w-full h-80 object-cover p-3"
                src={coffee.imgUrl}
                alt="beverage"
              />
              <div className="p-2">
                <div className="font-bold text-lg mb-1">{coffee.title}</div>
              </div>
              <div className="px-4 py-2 text-left">
                <button className="bg-yellowish text-black px-4 py-2 rounded-sm hover:bg-browninsh hover:text-white"
                onClick={() => handleLearnMore(coffee.title,coffee.id)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCard;
