"use client";
import axios from 'axios';
import React, { useState } from 'react';

export default function Page() {
  const generateRandomId = () => Math.random().toString(36).substr(2, 9);
  
  const [newType, setNewType] = useState('');
  const [showNewTypeInput, setShowNewTypeInput] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const [newProduct, setNewProduct] = useState({
    id: generateRandomId(),
    name: '',
    price: 0,
    img: '',
    size:'',
    quantity: 0,
    category: '',
    description: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let tempErrors: any = {};

    if (!newProduct.name) {
      valid = false;
      tempErrors.name = 'Tên sản phẩm là bắt buộc';
    }
    if (!newProduct.price || newProduct.price <= 0) {
      valid = false;
      tempErrors.price = 'Giá sản phẩm phải lớn hơn 0';
    }
    if (!newProduct.img) {
      valid = false;
      tempErrors.img = 'Hình ảnh sản phẩm là bắt buộc';
    }
    if (!newProduct.quantity || newProduct.quantity <= 0) {
      valid = false;
      tempErrors.quantity = 'Số lượng phải lớn hơn 0';
    }
    if (!newProduct.description) {
      valid = false;
      tempErrors.description = 'Mô tả sản phẩm là bắt buộc';
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Validate form data
    if (!validateForm()) {
      return;
    }

    // Set category if "Thêm loại mới" is selected
    if (showNewTypeInput && newType !== '') {
      newProduct.category = newType; 
    }

    console.log("them san pham:", newProduct);
    
    axios.post('http://localhost:8080/products', newProduct)
      .then(() => {alert('Thêm sản phẩm mới thành công!') , 
        setNewProduct({
    id: generateRandomId(),
    name: '',
    price: 0,
    img: '',
    quantity: 0,
    size:'',
    category: '',
    description: '',
        })
        }
    )
      .catch((error) => console.error("Lỗi khi thêm sản phẩm:", error));
  };

  const handleCategoryChange = (e: any) => {
    const value = e.target.value;
    if (value === 'new') {
      setShowNewTypeInput(true);
    } else {
      setShowNewTypeInput(false);
      setNewProduct((prev) => ({ ...prev, category: value }));
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Tạo sản phẩm mới :</h1>
      <form onSubmit={handleSubmit}>
        {/* Tên sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productName">
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Link hình ảnh sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productImg">
            Link hình ảnh sản phẩm
          </label>
          <input
            type="text"
            id="productImg"
            name="img"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.img}
            onChange={handleChange}
          />
          {errors.img && <p className="text-red-500 text-sm mt-1">{errors.img}</p>}
        </div>

        {/* Giá sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productPrice">
            Giá sản phẩm
          </label>
          <input
            type="number"
            id="productPrice"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.price}
            onChange={handleChange}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>
        

        {/* Thể loại của sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productCategory">
            Thể loại
          </label>
          <select
            id="productCategory"
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.category}
            onChange={handleCategoryChange}
          >
            <option value="">Chọn thể loại</option>
            <option value="">Chọn thể loại</option>
            <option value="ni">Áo nỉ</option>
            <option value="du">Áo dù</option>
            <option value="kaki">Áo kaki</option>
            <option value="playze_nam">playze nam</option>
            <option value="thunn">Áo thun ngắn</option>
            <option value="thund">Áo thun dài</option>
            <option value="thunpl">Áo thun polo</option>
            <option value="somin">Áo sơ mi ngắn tay</option>
            <option value="somid">Áo sơ mi dài tay</option>
            <option value="quanj">Quần dài jean</option>
            <option value="quank">Quần dài kaki</option>
            <option value="quanv">Quần dài vải</option>
            <option value="shortt">Quần thun</option>
            <option value="shorttay">Quần tây</option>
            <option value="shortd">Quần dù</option>
            <option value="shortt">Đồng hồ</option>
            <option value="shorttay"> Vòng tay</option>
            <option value="shortd">Cà vạt</option>
            <option value="new">Thêm loại mới</option>
            <option value="new">Thêm loại mới</option>
           </select>
        </div>

        {/* Hiển thị ô nhập loại sản phẩm mới nếu người dùng chọn "Thêm loại mới" */}
        {showNewTypeInput && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="newType">
              Nhập loại mới
            </label>
            <input
              type="text"
              id="newType"
              name="newType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            />
          </div>
        )}
        {/**Size */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productCategory">
            Thể loại
          </label>
          <select
            id="productCategory"
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.size}
            onChange={handleChange}
          >
            <option value="">Chọn Size</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="li">l</option>
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="3xl">3xl</option>
            <option value="4xl">4xl</option>
            <option value="5xl">5xl</option>
           </select>
        </div>

        {/* Số lượng */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productQuantity">
            Số lượng
          </label>
          <input
            type="number"
            id="productQuantity"
            name="quantity"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.quantity}
            onChange={handleChange}
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
        </div>

        {/* Mô tả sản phẩm */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="productDescription">
            Mô tả chi tiết
          </label>
          <textarea
            id="productDescription"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={newProduct.description}
            onChange={handleChange}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}
