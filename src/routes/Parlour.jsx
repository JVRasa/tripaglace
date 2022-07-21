import React from 'react';
import Header from '../components/Header';
import ParlourCard from '../components/ParlourCard';

function Parlour() {
  return (
    <div className="h-screen bg-light-blue p-4">
      {' '}
      <Header />
      <div className="bg-purple p-4 rounded-xl text-[#F5F5F5] text-xl  mt-28 mb-12">
        Rechercher un parfum
      </div>
      <section className="flex flex-col gap-4">
        <ParlourCard />
        <ParlourCard />
      </section>
    </div>
  );
}

export default Parlour;
