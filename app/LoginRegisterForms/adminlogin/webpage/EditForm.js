"use client"
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pquqecfuohkgeipmcgkt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c"
);

const MyForm = ({ isModalOpen }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("");
  const [amount, setAmount] = useState("");

  const [addImage, setAddImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: companyservices, error } = await supabase
          .from("companyservices")
          .select("*")
          .eq("id", isModalOpen);

        if (error) {
          console.log(error);
          return;
        }

        let editableData = companyservices[0];
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
    try {
      const response = await fetch("/api/newdata", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isModalOpen,
          image,
          title,
          description,
          feature,
          amount,
        }),
      });

      const dataz = await response.json();
      if (dataz === null) {
        console.log("get serious bro ");
      } else {
        // const supabase = createClient(
        //   "https://pquqecfuohkgeipmcgkt.supabase.co",
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c"
        // );
        console.log("brainiac----");
        // const { data, error } = await supabase.from("companyservices").insert({
        //   image,
        //   title,
        //   description,
        //   feature,
        //   amount,
        // });
        // console.log(data);
        if (error) {
          console.log(error);
        }
        console.log(dataz);

        setImage("");
        setTitle("");
        setDescription("");
        setFeature("");
        setAmount("");
        // setRefresh(true)
        // closeModal()
      }
    } catch (error) {
      console.log(error);
    }
  };

  // try {
  //   // Update the Supabase data here using the fetched values
  //   // and the form input values

  //   console.log("Updated data:", {
  //     image,
  //     title,
  //     description,
  //     feature,
  //     amount,
  //   });

  // Reset form inputs after successful update
  //       setImage("");
  //       setTitle("");
  //       setDescription("");
  //       setFeature("");
  //       setAmount("");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleImageChange = async (e) => {
    // Handle image upload logic here
    try {
      const supabase = createClient(
        "https://pquqecfuohkgeipmcgkt.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c"
      );
      // const supabase = createClient(
      //   process.env.SUPABASE_URL,
      //   process.env.NEXT_PUBLIC_SUPABASE_KEY
      // );
      const file = e.target.files[0];
      console.log(file);
      // Perform any necessary image processing here
      //   setImage(file);

      if (!file) {
        setAddImage("Please select a file to upload ");

        return;
      }
      if (image) {
        function getFileNameFromURL(url) {
          const parts = url.split("/");
          const fileName = parts[parts.length - 1];
          return fileName;
        }
        try {
          const fileName = getFileNameFromURL(image);
          const response = await fetch("/api/handleimageedit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fileName }),
          });

          const dataz = await response.json();
          console.log(dataz);
        } catch (error) {
          console.log(error);
        }
      }

      // const fileExt = file.name.split(".").pop();
      // const newFileName = `${Date.now()}.${fileExt}`;

      const fileExt = file.name.split(".").pop();
      const newFileName = `${Date.now()}.${fileExt}`;

      console.log(file.name);
      // const formData = new FormData();
      // formData.append("newFileName", newFileName);
      // formData.append("file", file);
      //  const formData = new FormData();
      //  formData.append("newFileName", newFileName);
      // formData.append("file", file);
      // let pimpina = file
      // // const formData={...file}
      // console.log(file)
      // console.log(pimpina)

      // const response = await fetch("/api/handleNewimageedit", {
      //   method: "POST",
      //   body: JSON.stringify({ newFileName, file, formData, pimpina }),
      //   // body: file
      // });

      // const datax = await response.json();
      // console.log(datax);
      // setImage(datax);
      // ....................................
      const { data, error } = await supabase.storage
        .from("collection")
        .upload(newFileName, file);

      if (error) {
        console.error("Error uploading file:", error.message);
        return;
      }

      console.log("File uploaded successfully:", data);
      const url = supabase.storage
        .from("collection")
        .getPublicUrl(`${data.path}`);
      console.log(url.data.publicUrl);
      setImage(url.data.publicUrl);
      console.log(image);
    } catch (error) {
      console.log(error);
    }
    // console.log(file)
    // const { data, error } = await supabase.storage
    //   .from("collection")
    //   .upload(newFileName, file);

    // if (error) {
    //   console.error("Error uploading file:", error.message);
    //   return;
    // }

    // console.log("File uploaded successfully:", data);
    // const url = supabase.storage
    //   .from("collection")
    //   .getPublicUrl(`${data.path}`);
    // console.log(url.data.publicUrl);
    // setImage(url.data.publicUrl);
    // console.log(image);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-blue-200 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="max-h-80 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold">Edit Items</h1>
            <button
              type="button"
              //   onClick={closeModal}
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
            {/* {
              <span className="text-red-500">{addImage}</span>
            } */}
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
                // onClick={closeModal}
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
