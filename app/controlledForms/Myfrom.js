import React, { useState, useContext } from "react";
// import { fetchData } from "../autofetchData/apifetch";
// const { setUpdatedServerData } = useContext(AuthContext) || {};
 import AuthContext from "../myContext/index.js";

const MyForm = ({ closeModal }) => {
  const { setUpdatedServerData, updatedServerData } =
    useContext(AuthContext) || {};
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("");
  const [amount, setAmount] = useState("");
  const [refresh, setRefresh] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    try {
      const response = await fetch("/api/newdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image, title, description, feature, amount }),
      });

      const dataz = await response.json();
      if (dataz === null) {
        console.log("no data or an error occured ");
      } else {
        console.log(dataz);
        setImage("");
        setTitle("");
        setDescription("");
        setFeature("");
        setAmount("");
        closeModal();
         setUpdatedServerData(!updatedServerData);
      }
    } catch (error) {
      console.log(error);
    }
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
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="max-h-80 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold">Add Items</h1>
            <button
              type="button"
              onClick={closeModal}
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
                  {/* <button
                    type="button"
                    onClick={() => {
                      // Save image logic
                    //   console.log("Saving image...");
                        saveImage
                    }}
                    className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Save
                  </button> */}
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
                Submit
              </button>
              <button
                type="button"
                onClick={closeModal}
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
