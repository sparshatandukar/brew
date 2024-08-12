import React from "react";

const SecondCard = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center my-1 mt-10">
        {props.data.map((recipe, index) => {
          return (
            <div className="w-full h-auto md:h-60 flex bg-lightGrey rounded-lg overflow-hidden shadow-lg mb-5 mx-10" key={index}>
              <div className="w-96 h-60 flex-none">
                <img
                  className="w-full h-full object-cover"
                  src={recipe.imgUrl}
                  alt="beverage"
                />
              </div> 
              <div className="w-2/3 px-6 py-4 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{recipe.title}</div>
                  <p className="text-gray-700 text-base">{recipe.description}</p>
                </div>
                <div className="mt-4">
                  <button className="bg-yellowish text-black px-5 py-2">
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SecondCard;
