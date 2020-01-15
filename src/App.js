import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BodyContainer from './components/BodyContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
