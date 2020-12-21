import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Menubh from './components/global/Menubh';
import Footerbh from './components/global/Footerbh';
import CardCont from './components/tienda/CardCont';
import Categorias from './components/global/Categorias';
import Carrousel from './components/home/Carrousel';
import ContDescription from './components/tienda/ContDescription';

function App() {
  return (
    <>
    <Menubh />
    <Categorias />
    <Carrousel />
    <CardCont />
    <ContDescription />
    <Footerbh />
    </>
  );
}

export default App;
