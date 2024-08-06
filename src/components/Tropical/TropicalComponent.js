import React from 'react';

const TropicalComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Tropical Smoothie Recipe</h2>
      <img 
        className="w-full h-64 object-cover rounded-lg mb-4"
        src="https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___tropical-protein-smoothie-3.jpg" 
        alt="Tropical Smoothie" 
      />
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside">
          <li>1 cup of frozen mango chunks</li>
          <li>1 cup of frozen pineapple chunks</li>
          <li>1 banana</li>
          <li>1 cup of coconut water or coconut milk</li>
          <li>1/2 cup of Greek yogurt (optional for creaminess)</li>
          <li>1 tablespoon of honey or maple syrup (optional for sweetness)</li>
          <li>Ice cubes (optional for extra chill)</li>
          <li>Fresh mint leaves for garnish (optional)</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal list-inside">
          <li>Place the frozen mango chunks, frozen pineapple chunks, banana, and coconut water (or coconut milk) into a blender.</li>
          <li>If using, add the Greek yogurt for extra creaminess.</li>
          <li>Add honey or maple syrup for sweetness, if desired.</li>
          <li>Blend on high until smooth and creamy.</li>
          <li>If the smoothie is too thick, add a little more coconut water or coconut milk and blend again until desired consistency is reached.</li>
          <li>If using, add a few ice cubes and blend again for an extra-chilled smoothie.</li>
          <li>Pour the smoothie into glasses.</li>
          <li>Garnish with fresh mint leaves, if desired.</li>
          <li>Serve immediately and enjoy!</li>
        </ol>
      </div>
    </div>
  );
};

export default TropicalComponent;
