import React, { useState, useEffect } from "react";
import axiosInstance from "../../Axios/axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    types: "",
  });
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("category/all");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        const response = await axiosInstance.patch(
          `category/update/${editingCategory._id}`,
          newCategory
        );
        toast.success(response.data.msg);
        setEditingCategory(null);
      } else {
        const response = await axiosInstance.post(
          "/category/create",
          newCategory
        );
        toast.success(response.data.msg);
      }
      setNewCategory({
        name: "",
        types: "",
      });
      fetchCategories();
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.msg);
    }
  };

  const handleEdit = (category) => {
    setNewCategory({
      name: category.name,
      types: category.types,
    });
    setEditingCategory(category);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found.");
      }
      const response = await axiosInstance.delete(`category/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response.data.msg);
      fetchCategories(); // Refresh the list of categories
    } catch (error) {
      console.error("Error deleting category:", error);
      const errorMsg = error.response?.data?.msg || "An unexpected error occurred.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Category</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={newCategory.name}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="types" className="mb-2 font-semibold">
              Category Type
            </label>
            <input
              type="text"
              name="types"
              id="types"
              value={newCategory.types}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {editingCategory ? "Update Category" : "Add Category"}
          </button>
        </form>
      </div>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Category List</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li
              key={category._id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.types}</p>
              </div>
              <div className="flex mt-4 md:mt-0 md:space-x-2">
                <button
                  onClick={() => handleEdit(category)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <AiFillEdit size={24} />
                </button>
                <button
                  onClick={() => handleDelete(category._id)}
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

export default AddCategory;
