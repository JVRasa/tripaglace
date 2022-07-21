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
      .get(`http://localhost:5000/parlours/${id}/reviews`)
      .then((res) => setReviewList(res.data))
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  if (!parlorDetails || !reviewList) return null;

  const flavoursList = parlorDetails.flavours.split(',');

  const color = 'yellow';

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
        <section className="bg-[#ffffff] p-4 rounded-xl mb-4 flex flex-col">
          <p>
            N&rsquo;hésitez pas à laisser un avis si vous avez déjà mangé ici !
          </p>
          <div className="bg-green px-2 text-center m-auto mt-4 rounded-xl">
            <Link to={`/parlour/${id}/addreview`}>AJOUTER MON AVIS</Link>
          </div>
        </section>
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
