import React from 'react';

const IcedCoffeeComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Iced Coffee Recipe</h2>
      <img 
        className="w-full h-64 object-cover rounded-lg mb-4"
        src="https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Iced Coffee" 
      />
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside">
          <li>1 cup of strong brewed coffee, cooled</li>
          <li>1/2 cup of milk or cream</li>
          <li>1-2 tablespoons of sugar (optional)</li>
          <li>Ice cubes</li>
          <li>Whipped cream (optional)</li>
          <li>Chocolate syrup (optional)</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal list-inside">
          <li>Brew a cup of strong coffee and let it cool to room temperature.</li>
          <li>Fill a glass with ice cubes.</li>
          <li>Pour the cooled coffee over the ice cubes.</li>
          <li>Add milk or cream to your taste.</li>
          <li>Sweeten with sugar if desired, and stir well.</li>
          <li>Top with whipped cream and a drizzle of chocolate syrup if desired.</li>
          <li>Serve immediately and enjoy your refreshing iced coffee!</li>
        </ol>
      </div>
    </div>
  );
};

export default IcedCoffeeComponent;
