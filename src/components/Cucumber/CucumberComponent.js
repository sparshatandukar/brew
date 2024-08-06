import React from 'react';

const CucumberComponent = () => {
  return (
    
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Cucumber Mint Cooler Recipe</h2>
      <img 
        className="max-w-96 h-64 object-cover rounded-sm mb-4"
        src="https://www.sidechef.com/recipe/07a4766c-d39e-4dff-8cd3-0b0a538f1d04.jpg?d=1408x1120" 
        alt="Cucumber Mint Cooler" 
      />
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside">
          <li>1 cucumber, thinly sliced</li>
          <li>10 fresh mint leaves</li>
          <li>2 tablespoons of lime juice</li>
          <li>1 tablespoon of honey</li>
          <li>2 cups of sparkling water</li>
          <li>Ice cubes</li>
          <li>Mint sprigs for garnish</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal list-inside">
          <li>In a pitcher, combine the cucumber slices and mint leaves.</li>
          <li>Add the lime juice and honey, then muddle the ingredients together to release the flavors.</li>
          <li>Pour in the sparkling water and stir to combine.</li>
          <li>Fill glasses with ice cubes and pour the cucumber mint cooler over the ice.</li>
          <li>Garnish with mint sprigs and additional cucumber slices if desired.</li>
          <li>Serve immediately and enjoy!</li>
        </ol>
      </div>
    </div>
  );
};

export default CucumberComponent;
