import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';

function AddReview() {
  const color = '#FF99C8';

  const [message, setMessage] = useState('');
  const [parlorDetails, setParlorDetails] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/parlours/${id}`)
      .then((res) => setParlorDetails(res.data))
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/reviews/', {
        message,
        user_id: 2,
        parlour_id: parseInt(id, 10),
      })
      .then(navigate(`/parlour/${id}`))
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  return (
    <div className="min-h-screen bg-[#FF99C8] p-4">
      <Header color={color} />
      <Link to={`/parlour/${id}`}>
        <p className="mt-[70px]">← retour au glacier</p>
      </Link>
      <section className="mt-10">
        <h1 className="text-3xl font-Mochiy text-light-blue text-center">
          {parlorDetails.shopname}
        </h1>
        <section className="bg-[#ffffff] p-4 mt-10 rounded-xl">
          <section className="flex gap-4 items-center mb-4">
            <div className="w-12 h-12 bg-grey rounded-full">image</div>
            <div>username</div>
          </section>
          <form
            onSubmit={handleAddReview}
            className="flex flex-col items-center"
          >
            <textarea
              name="review"
              placeholder="Laissez votre avis ici"
              rows="8"
              className="w-full h-auto"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            >
              {' '}
            </textarea>
            <button
              type="submit"
              className="bg-green px-4 py-1 text-center mt-4 rounded-xl"
            >
              AJOUTER
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default AddReview;
