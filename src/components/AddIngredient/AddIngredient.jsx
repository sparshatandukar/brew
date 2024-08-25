import React, { useState, useEffect } from "react";
import axiosInstance from "../../Axios/axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddIngredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]); // New state for recipes
  const [newIngredient, setNewIngredient] = useState({
    ingredientName: "",
    quantity: "",
    recipeId: "",
     // New field for selected recipe
  });
  const [editingIngredient, setEditingIngredient] = useState(null);

  useEffect(() => {
    fetchIngredients();
    fetchRecipes(); // Fetch recipes when the component mounts
  }, []);

  const fetchIngredients = async () => {
    try {
      const response = await axiosInstance.get("ingredient/all");
      setIngredients(response.data.ingredients);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };
  

  const fetchRecipes = async () => {
    try {
      const response = await axiosInstance.get("recipe/all");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingIngredient) {
        const response = await axiosInstance.patch(
          `ingredient/update/${editingIngredient._id}`,
          newIngredient
        );
        toast.success(response.data.msg);
        setEditingIngredient(null);
      } else {
        const response = await axiosInstance.post(
          "/ingredient/create",
          newIngredient
        );
        toast.success(response.data.msg);
      }
      setNewIngredient({
        ingredientName: "",
        quantity: "",
        recipe: "", // Reset recipe
      });
      fetchIngredients();
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const handleEdit = (ingredient) => {
    setNewIngredient({
      ingredientName: ingredient.ingredientName,
      quantity: ingredient.quantity,
      recipe: ingredient.recipe || "", // Set recipe if it exists
    });
    setEditingIngredient(ingredient);
  };

  const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No authentication token found.");
    }
    const response = await axiosInstance.delete(`ingredient/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.data.msg);
    fetchIngredients(); // Refresh ingredients list
  } catch (error) {
    console.error("Error deleting ingredient:", error);
    const errorMsg = error.response?.data?.msg || "An unexpected error occurred.";
    toast.error(errorMsg);
  }
};

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Ingredient</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="ingredientName" className="mb-2 font-semibold">
              Ingredient Name
            </label>
            <input
              type="text"
              name="ingredientName"
              id="ingredientName"
              value={newIngredient.ingredientName}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="quantity" className="mb-2 font-semibold">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={newIngredient.quantity}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="recipe" className="mb-2 font-semibold">
              Recipe
            </label>
            <select
              name="recipeId"
              id="recipe"
              value={newIngredient.recipeId}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select a recipe</option>
              {recipes.map((recipe) => (
                <option key={recipe._id} value={recipe._id}>
                  {recipe.recipeName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {editingIngredient ? "Update Ingredient" : "Add Ingredient"}
          </button>
        </form>
      </div>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Ingredient List</h2>
        <ul className="space-y-4">
          {ingredients.map((ingredient) => (
            <li
              key={ingredient._id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{ingredient.ingredientName}</h3>
                <p className="text-gray-600">{ingredient.quantity}</p>
                <p className="text-gray-500">Recipe: {ingredient.recipeName}</p> {/* Display recipe name */}
              </div>
              <div className="flex mt-4 md:mt-0 md:space-x-2">
                <button
                  onClick={() => handleEdit(ingredient)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <AiFillEdit size={24} />
                </button>
                <button
                  onClick={() => handleDelete(ingredient._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <AiFillDelete size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddIngredient;
