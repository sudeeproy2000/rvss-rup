import React from "react";

function FirstPage() {
  return (
    <>
      <div className="mb-12 text-4xl font-bold bg-slate-950 p-4">
        <h1 className="ml-12 text-white">Continue as</h1>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div>
          <button className="text-4xl font-bold bg-transparent hover:bg-yellow-500 text-blue-700 hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
            Student
          </button>
        </div>
        <div>
          <button className="bg-transparent hover:bg-red-500 text-blue-700 text-4xl font-bold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
            Class Teacher
          </button>
        </div>
        <div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-4xl font-bold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
            Admin
          </button>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
