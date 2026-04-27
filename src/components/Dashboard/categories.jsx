import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    categoryName: "",
    image: "",
    price: "",
    description: "",
  });

  const API = "http://localhost:3000/api/v1/category";

  // ✅ GET ALL
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setCategories(res.data);
    } catch (err) {
      setError("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/delete/${id}`);
      fetchCategories();
    } catch (err) {
      setError("Delete failed");
    }
  };

  // ✅ OPEN CREATE
  const handleCreate = () => {
    setEditData(null);
    setForm({
      categoryName: "",
      image: "",
      price: "",
      description: "",
    });
    setOpenModal(true);
  };

  // ✅ OPEN UPDATE
  const handleEdit = (cat) => {
    setEditData(cat);
    setForm(cat);
    setOpenModal(true);
  };

  // ✅ INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ CREATE + UPDATE
  const handleSubmit = async () => {
    try {
      if (!form.categoryName || !form.price) {
        setError("Name & Price required");
        return;
      }

      if (editData) {
        await axios.put(`${API}/update/${editData._id}`, form);
      } else {
        await axios.post(`${API}/create`, form);
      }

      setOpenModal(false);
      fetchCategories();
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Categories
      </h2>

      {error && (
        <p className="text-red-500 mb-3">{error}</p>
      )}

      <button
        onClick={handleCreate}
        className="bg-red-600 text-white px-4 py-2 rounded mb-5 hover:bg-red-700"
      >
        + Add Category
      </button>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="border rounded-lg shadow hover:shadow-lg transition p-3"
          >
            <img
              src={cat.image}
              alt=""
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="font-semibold mt-2 text-lg">
              {cat.categoryName}
            </h3>

            <p className="text-red-600 font-bold">
              ₹{cat.price}
            </p>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => handleEdit(cat)}
                className="bg-yellow-400 px-3 py-1 rounded text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(cat._id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-3">
          <div className="bg-white w-full max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-red-600 mb-3">
              {editData ? "Update Category" : "Add Category"}
            </h2>

            <input
              name="categoryName"
              placeholder="Category Name"
              value={form.categoryName}
              onChange={handleChange}
              className="border w-full mb-2 p-2 rounded"
            />

            <input
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
              className="border w-full mb-2 p-2 rounded"
            />

            <input
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="border w-full mb-2 p-2 rounded"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="border w-full mb-2 p-2 rounded"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                {editData ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;