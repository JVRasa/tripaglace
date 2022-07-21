import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  console.log(parlourList);

  return (
    <div className="h-screen bg-light-blue p-4">
      {' '}
      <Header />
      <div className="md:w-[70%] md:m-auto">
        <div className="bg-purple p-4 rounded-xl text-[#F5F5F5] text-xl  mt-28 mb-12">
          Rechercher un parfum
        </div>
        <section className="flex flex-col gap-4">
          {parlourList.map((parlour) => (
            <Link to={`/parlour/${parlour.id}`}>
              <ParlourCard parlour={parlour} key={parlour.id} id={parlour.id} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Parlour;
