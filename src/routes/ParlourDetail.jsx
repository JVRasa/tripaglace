import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import ReviewCard from '../components/ReviewCard';

function ParlourDetail() {
  const [parlorDetails, setParlorDetails] = useState('');
  const [reviewList, setReviewList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/parlours/${id}`)
      .then((res) => setParlorDetails(res.data))
      .catch((err) => {
        console.error(err.response.data);
      });

    axios
      .get(`http://localhost:5000/reviews/${id}`)
      .then((res) => setReviewList(res.data))
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  if (!parlorDetails || !reviewList) return null;

  const flavoursList = parlorDetails.flavours.split(',');

  const color = '#FCF6BD';

  return (
    <div className="min-h-screen bg-yellow p-4">
      <Header color={color} />
      <Link to="/parlour">
        <p className="mt-[70px]">← retour à la liste des glaciers</p>
      </Link>
      <section className="flex flex-col gap-4 mx-5 mt-8">
        <div className="bg-grey w-full h-[24vh] rounded-xl">image</div>
        <h1 className="text-[#4E98BE] font-black text-center text-2xl">
          {parlorDetails.shopname}
        </h1>
        <section>
          <p>{parlorDetails.address}</p>
          <p>
            {parlorDetails.zip}
            &nbsp;
            {parlorDetails.city}
          </p>
          <p>Horaires d&rsquo;ouverture :</p>
        </section>
        <h1 className="text-purple font-black text-center text-2xl">
          Parfums disponibles
        </h1>
        <section className="grid grid-cols-2">
          {flavoursList.map((flavor) => (
            <div key={flavor}>{flavor}</div>
          ))}
        </section>
        <h1 className="text-pink font-black text-center text-2xl">
          Avis des clients
        </h1>
        <section>
          {reviewList.map((review) => (
            <ReviewCard key={review.id} review={review} reviewId={review.id} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default ParlourDetail;
