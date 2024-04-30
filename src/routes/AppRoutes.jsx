import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/derek-pham/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
