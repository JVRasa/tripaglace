import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ParlourCard from '../components/ParlourCard';

function Parlour() {
  const [parlourList, setParlourList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/parlours')
      .then((res) => setParlourList(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="h-screen bg-light-blue p-4">
      {' '}
      <Header />
      <div className="bg-purple p-4 rounded-xl text-[#F5F5F5] text-xl  mt-28 mb-12">
        Rechercher un parfum
      </div>
      <section className="flex flex-col gap-4">
        {parlourList.map((parlour) => (
          <ParlourCard parlour={parlour} key={parlour.shopname} />
        ))}
      </section>
    </div>
  );
}

export default Parlour;
