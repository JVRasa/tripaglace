import React from 'react';

function ParlourCard() {
  return (
    <div className="bg-yellow py-4 px-8 rounded-xl flex justify-between gap-4">
      <section className="w-[25%] flex items-center">
        <div className="w-16 h-16 bg-grey rounded-full">1</div>
      </section>
      <section className="w-[75%]">
        <h1 className="font-bold">Nom du glacier</h1>
        <p>Adresse</p>
        <p>Lyon</p>
        <p>Horaires</p>
      </section>
    </div>
  );
}

export default ParlourCard;
