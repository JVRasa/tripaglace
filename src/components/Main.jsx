import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Parlour from '../routes/Parlour';
import ParlourDetail from '../routes/ParlourDetail';
import AddReview from '../routes/AddReview';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parlour" element={<Parlour />} />
        <Route path="/parlour/:id" element={<ParlourDetail />} />
        <Route path="/parlour/:id/addreview" element={<AddReview />} />
      </Routes>
    </main>
  );
}

export default Main;
