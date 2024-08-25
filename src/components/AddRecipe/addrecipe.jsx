import React, { useState, useEffect } from "react";
import axiosInstance from "../../Axios/axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [subCategories, setSubCategories] = useState([]); // State for subcategories
  const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    description: "",
    prep_time: "",
    difficulty: "",
    direction:"",
    recipeImage: "",
    categoryId: ""
  });
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
    fetchCategories(); 
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axiosInstance.get("recipe/all");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("category/all");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // const handleCategoryChange = (e) => {
  //   const selectedCategory = e.target.value;
  //   setNewRecipe({ ...newRecipe, category: selectedCategory, subCategory: "" });
  //   fetchSubCategories(selectedCategory); // Fetch subcategories when the category changes
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingRecipe) {
        const response = await axiosInstance.patch(
          `recipe/update/${editingRecipe._id}`,
          newRecipe
        );
        toast.success(response.data.msg);
        setEditingRecipe(null);
      } else {
        const formData = new FormData();
        Object.keys(newRecipe).forEach((key) => {
          formData.append(key, newRecipe[key]);
        });
        const response = await axiosInstance.post(
          "/recipe/create",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        toast.success(response.data.msg);
      }
      setNewRecipe({
        recipeName: "",
        description: "",
        prep_time: "",
        difficulty: "",
        direction:"",
        recipeImage: "",
        category: "",
        subCategory: "", // Reset subcategory
      });
      fetchRecipes();
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const handleEdit = (recipe) => {
    setNewRecipe({
      recipeName: recipe.recipeName,
      description: recipe.description,
      prep_time: recipe.prep_time,
      difficulty: recipe.difficulty,
      direction:recipe.direction,
      recipeImage: recipe.recipeImage,
      category: recipe.category || "",
      subCategory: recipe.subCategory || "", // Set subcategory if it exists
    });
    setEditingRecipe(recipe);
    fetchCategories(recipe.category); // Fetch subcategories for editing recipe
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.delete(
        `recipe/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.msg);
      fetchRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Recipe</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="recipeName" className="mb-2 font-semibold">
              Recipe Name
            </label>
            <input
              type="text"
              name="recipeName"
              id="recipeName"
              value={newRecipe.recipeName}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="mb-2 font-semibold">
              Recipe Description
            </label>
            <textarea
              name="description"
              id="description"
              value={newRecipe.description}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            ></textarea>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="prep_time" className="mb-2 font-semibold">
              Preparation Time (minutes)
            </label>
            <input
              type="number"
              name="prep_time"
              id="prep_time"
              value={newRecipe.prep_time}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="difficulty" className="mb-2 font-semibold">
              Difficulty
            </label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              value={newRecipe.difficulty}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="direction" className="mb-2 font-semibold">
              Direction
            </label>
            <textarea
              name="direction"
              id="direction"
              value={newRecipe.direction}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            ></textarea>
            </div>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="category" className="mb-2 font-semibold">
              Category
            </label>
            <select
              name="categoryId" // Changed to match the state key
              id="category"
              value={newRecipe.categoryId}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.types}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="recipeImage" className="mb-2 font-semibold">
              Image
            </label>
            <input
              type="file"
              name="recipeImage"
              id="recipeImage"
              onChange={(e) => setNewRecipe({ ...newRecipe, recipeImage: e.target.files[0] })}
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {editingRecipe ? "Update Recipe" : "Add Recipe"}
          </button>
        </form>
      </div>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Recipe List</h2>
        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li
              key={recipe._id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{recipe.recipeName}</h3>
                <p className="text-gray-600">{recipe.description}</p>
                <p className="text-gray-500">Preparation Time: {recipe.prep_time} minutes</p>
                <p className="text-gray-500">Difficulty: {recipe.difficulty}</p>
                <p className="text-gray-500">Category: {recipe.categoryId.name}</p>
                <p className="text-gray-500">Sub Category: {recipe.categoryId.types}</p>
                <p className="text-gray-500">Direction: {recipe.direction}</p>
                {recipe.recipeImage && (
                  <img
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    className="mt-2 w-32 h-32 object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="flex mt-4 md:mt-0 md:space-x-2">
                <button
                  onClick={() => handleEdit(recipe)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <AiFillEdit size={24} />
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
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

export default AddRecipe;
