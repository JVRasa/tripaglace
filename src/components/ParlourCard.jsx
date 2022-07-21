import React from 'react';

function ParlourCard({ parlour }) {
  return (
    <div className="bg-yellow py-4 px-8 rounded-xl flex justify-between gap-4">
      <section className="w-[25%] flex items-center">
        <div className="w-16 h-16 bg-grey rounded-full">1</div>
      </section>
      <section className="w-[75%]">
        <h1 className="font-bold">{parlour.shopname}</h1>
        <p>{parlour.address}</p>
        <p>{parlour.zip}</p>
        <p>{parlour.city}</p>
      </section>
    </div>
  );
}

export default ParlourCard;
