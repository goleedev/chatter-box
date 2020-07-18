import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'
import MainCard from './components/views/MainCard/MainCard';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Header />
      <MainCard />
      <Footer />
    </Suspense>
  );
}

export default App;
