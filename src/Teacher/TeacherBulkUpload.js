import React from "react";
import { useNavigate } from "react-router-dom";

function BulkUpload() {
  const navigate = useNavigate();

  function goToBulkUpload() {
    navigate("/excel");
  }
  return (
    <div className="flex justify-end mt-4 gap-5">
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white text-4xl px-4 py-10 rounded-xl w-auto"
        onClick={goToBulkUpload}
      >
        + Teacher Bulk Upload
      </button>
    </div>
  );
}

export default BulkUpload;
