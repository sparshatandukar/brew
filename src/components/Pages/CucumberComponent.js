import React, { useState, useEffect } from 'react';
import axiosInstance from "../../Axios/axios";
import { useParams } from 'react-router-dom';

const CucumberComponent = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchRecipeData();
  }, [id]);

  const fetchRecipeData = async () => {
    try {
      // Fetch the recipe data by ID
      const recipeResponse = await axiosInstance.get(`recipe/${id}`);
      setRecipe(recipeResponse.data.recipe);

      // Fetch the ingredients associated with the fetched recipe
      const ingredientsResponse = await axiosInstance.get(`ingredient/${id}`);
      setIngredients(ingredientsResponse.data.ingredients);

    } catch (error) {
      console.error("Error fetching recipe or ingredients:", error);
    }
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl  bg-white border-t-8  border-b-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-light mb-6 text-center text-gray-700">Recipe</h2>
      <h3 className="text-3xl font-semibold mb-4 text-center text-gray-800">{recipe.recipeName}</h3>
      <p className="text-md font-normal mb-8 text-center text-gray-800">{recipe.description}</p>
      
      <div className="flex justify-center mb-4">
        <img
          className="w-96 h-80 object-cover rounded-lg shadow-md" // Increased height
          src={recipe.recipeImage}
          alt={recipe.recipeName}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <div className="w-full sm:w-1/2 pr-4">
          <h3 className="text-2xl font-medium mb-2 text-yellow-500">Ingredients</h3>
          <ul className="list-disc list-inside text-gray-700">
            {ingredients.length > 0 ? (
              ingredients.map((ingredient) => (
                <li key={ingredient._id}>{ingredient.ingredientName} - {ingredient.quantity}</li>
              ))
            ) : (
              <li>No ingredients available.</li>
            )}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 pl-4 mt-4 sm:mt-0">
  <h3 className="text-2xl font-medium mb-2 text-yellow-500">Directions</h3>
  <ol className="list-decimal list-inside text-gray-700">
    {recipe.direction ? (
      recipe.direction.split('\n').map((step, index) => (
        <li key={index}>{step.trim()}</li>
      ))
    ) : (
      <li>No directions available.</li>
    )}
  </ol>
</div>

      </div>

      <div className="text-sm text-gray-600">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Prep Time:</span> {recipe.prep_time} mins
        </div>

        <div className="flex justify-between mb-2">
          <span className="font-semibold">Difficulty:</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default CucumberComponent;
