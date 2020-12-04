import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Menubh from './components/global/Menubh';
import Footerbh from './components/global/Footerbh';
import Card from './components/tienda/CardCont';

function App() {
  return (
    <>
    <Menubh />
    <Card />
    <Footerbh />
    </>
  );
}

export default App;
