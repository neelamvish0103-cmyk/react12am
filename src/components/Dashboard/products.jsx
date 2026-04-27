import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    images: "",
    description: "",
    price: "",
    stock: "",
    brand: "",
  });

  // ✅ GET ALL PRODUCTS
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/product/all");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ GET ALL CATEGORIES
  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/category/all");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ CREATE PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        images: [formData.images], // convert string to array
      };

      await axios.post(
        "http://localhost:3000/api/v1/product/create",
        payload
      );

      alert("Product Created ✅");

      getProducts(); // refresh list

      setFormData({
        name: "",
        category: "",
        images: "",
        description: "",
        price: "",
        stock: "",
        brand: "",
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5">

      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      {/* ✅ FORM */}
      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        {/* ✅ CATEGORY DROPDOWN */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.categoryName}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="images"
          placeholder="Image URL"
          value={formData.images}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Create Product
        </button>
      </form>

      {/* ✅ PRODUCT LIST */}
      <h2 className="text-2xl font-bold mt-8">All Products</h2>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((p) => (
          <div key={p._id} className="border p-3 rounded">

            <img
              src={p.images[0]}
              alt=""
              className="h-32 w-full object-cover"
            />

            <h3 className="font-bold">{p.name}</h3>

            {/* ✅ CATEGORY NAME */}
            <p className="text-sm text-gray-600">
              {p.category?.name}
            </p>

            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;