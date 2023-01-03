import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Principal from './pages/Principal/Principal';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CountryPage from './pages/Countries/CountryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
          <Routes>
              <Route path="/" element={<Principal />}></Route>
              <Route path="/country" element={<CountryPage />}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


