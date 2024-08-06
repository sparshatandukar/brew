import React from "react";

const CardComponent = (props) => {
 

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {props.data.map((product, index) => {
          return (
            <div className="rounded-lg  overflow-hidden shadow-lg bg-lightGrey" key={index}>
              <img
                className="w-full h-48 object-cover center"
                src={product.imgUrl}
                alt="beverage"
              />
              <div className="p-4">
                <div className="font-bold text-xl mb-2"> {product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 py-4 text-left">
                <button className="bg-yellowish text-black px-5 py-2 text-center">
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