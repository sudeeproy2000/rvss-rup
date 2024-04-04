import React, { useState } from "react";

const StudentCard = ({ cards, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center basis-2/4">
      {cards.map((card, index) => (
        <>
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer hover:border-2 border-rose-600"
            onClick={() => onSelect(card)}
          >
            <img
              src={localStorage.getItem(card.index)}
              alt=""
              className="h-21 m-6"
            />

            <h2 className="text-center px-2 pb-5 text-lg">
              {card.student.name}
            </h2>
          </div>
        </>
      ))}
    </div>
  );
};

export default StudentCard;
