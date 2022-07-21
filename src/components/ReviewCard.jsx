import React from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReviewCard({ review, reviewId }) {
  const deleteReview = (id) => {
    axios.delete(`http://localhost:5000/reviews/${id}`).catch((err) => {
      console.error(err.response.data);
    });
    window.location.reload(false);
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/review/${id}/edit`);
  };
  return (
    <div className="bg-light-blue p-4 rounded-xl mb-4">
      <section className="flex gap-4">
        <div className="w-12 h-12 bg-grey rounded-full">image</div>
        <div>{review.username}</div>
      </section>
      <section className="mt-2">
        <p>{review.message}</p>
        <div className="flex gap-2 mt-6">
          <PencilAltIcon
            className="h-6 w-6"
            onClick={() => handleEdit(reviewId)}
          />
          <TrashIcon
            className="h-6 w-6"
            onClick={() => deleteReview(reviewId)}
          />
        </div>
      </section>
    </div>
  );
}

export default ReviewCard;
