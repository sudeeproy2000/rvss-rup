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
        className="bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-lg w-auto"
        onClick={goToBulkUpload}
      >
        + Teacher Bulk Upload
      </button>
    </div>
  );
}

export default BulkUpload;
