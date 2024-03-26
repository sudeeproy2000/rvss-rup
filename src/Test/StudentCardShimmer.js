import React from "react";

function StudentCardShimmer() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-around">
        {Array.from({ length: 5 }).map((e, index) => (
          <>
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-md m-6 overflow-hidden cursor-pointer bg-slate-400 h-60 w-48 sm:w-52 border-2 border-black"
            >
              <div className="h-40 w-40 m-6 bg-slate-300"></div>

              <div className="text-center px-2 pb-5 text-lg bg-slate-50"></div>
            </div>
          </>
        ))}
      </div>

      <div className="flex items-center justify-around">
        {Array.from({ length: 5 }).map((e, index) => (
          <>
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-md m-6 overflow-hidden cursor-pointer bg-slate-400 h-60 w-48 sm:w-52 border-2 border-black"
            >
              <div className="h-40 w-40 m-6 bg-slate-300"></div>

              <div className="text-center px-2 pb-5 text-lg bg-slate-50"></div>
            </div>
          </>
        ))}
      </div>

      <div className="flex items-center justify-around">
        {Array.from({ length: 5 }).map((e, index) => (
          <>
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-md m-6 overflow-hidden cursor-pointer bg-slate-400 h-60 w-48 sm:w-52 border-2 border-black"
            >
              <div className="h-40 w-40 m-6 bg-slate-300"></div>

              <div className="text-center px-2 pb-5 text-lg bg-slate-50"></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default StudentCardShimmer;
