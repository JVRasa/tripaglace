import React from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

function ReviewCard() {
  return (
    <div className="bg-light-blue p-4 rounded-xl">
      <section className="flex gap-4">
        <div className="w-12 h-12 bg-grey rounded-full">image</div>
        <div>Nom</div>
      </section>
      <section className="mt-2">
        <p>Miam</p>
        <div className="flex gap-2 mt-6">
          <PencilAltIcon className="h-6 w-6" />
          <TrashIcon className="h-6 w-6" />
        </div>
      </section>
    </div>
  );
}

export default ReviewCard;
