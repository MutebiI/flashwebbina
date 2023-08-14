"use client";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../myContext/index.js";
const MyForm = ({ isModalOpen, closeModal }) => {
  const { setUpdatedServerData, updatedServerData } =
    useContext(AuthContext) || {};
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/showdataonedit?id=${isModalOpen}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const jsonData = await response.json();

        let editableData = jsonData[0];
        setImage(editableData.image);
        setTitle(editableData.title);
        setDescription(editableData.description);
        setFeature(editableData.feature);
        setAmount(editableData.amount);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      image: image,
      title: title,
      description: description,
      feature: feature,
      amount: amount,
    };
    const response = await fetch(`/api/newediteddata?id=${isModalOpen}`, {
      method: "PATCH", // You can use PUT or PATCH based on your API design
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    const meble = await response.json();
    console.log(meble);
    setUpdatedServerData(!updatedServerData);
    closeModal();

    // Scroll the page to half of the view height
    // window.location.reload();
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const newFileName = `${Date.now()}.${fileExt}`;
    const body = {
      file: file,
      newFileName: newFileName,
    };

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("newFileName", newFileName);
      const response = await fetch(
        "http://localhost:3001/api/handleimageedit",
        {
          method: "PATCH",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("File upload failed.");
      }

      const dataz = await response.json();
      console.log(dataz.imageUrl);
      setImage(dataz.imageUrl);
      // setUpdatedServerData(!updatedServerData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    closeModal();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-blue-200 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="max-h-80 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold">Edit Items</h1>
            <button
              type="button"
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-600 focus:text-red-600 focus:outline-none"
            >
              X
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Image:
                </label>
                <div className="flex">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={title}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="feature"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Feature:
              </label>
              <textarea
                id="feature"
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Amount:
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <button
                type="submit"
                className="mb-2 sm:mb-0 w-full sm:w-auto px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save changes
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
