import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const UploadPhoto = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Implement logic to upload the selected file to your backend server
    // This example just logs the file information for demonstration
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          <RxCross2 />
        </button>
        <div className="flex flex-col gap-5 bg-white px-20 py-10 rounded-lg mx-4 items-center">
          <form onSubmit={handleUpload}>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="fileInput"
                className="text-sm font-medium text-gray-700"
              >
                Select Photo
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="block w-full px-3 py-2 text-sm border rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                disabled={!selectedFile}
              >
                Upload Photo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
