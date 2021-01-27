import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Menubh from './components/global/Menubh';
import Footerbh from './components/global/Footerbh';
import CardCont from './components/tienda/CardCont';
import Categorias from './components/global/Categorias';
import Carrousel from './components/home/Carrousel';
import ContDescription from './components/tienda/ContDescription';
import Error404 from "./components/global/Error404";
import CategoryFilter from './components/tienda/CategoryFilter';
import Resumen from './components/cart/Resumen';
import CardDestacados from './components/tienda/CardDestacados';
import CheckOut from "./components/cart/CheckOut";
import Nosotros from "./components/nosotros/Nosotros"
import Contacto from './components/nosotros/Contacto';
import {Store} from './Store';


function App() {

  const [data, setData] = useState({
    productos: [],
    cantidad: 0,
    precioTotal: 0,
  });

  return (
    <Store.Provider value={[data, setData]}>
    <BrowserRouter>
      <Menubh />
      <Categorias />
      <Switch>
        
        <Route exact path="/">
          <Carrousel />
          <CardDestacados />
        </Route>

        <Route exact path="/category">
        <CardCont />
        </Route>

        <Route path="/category/:productId">
          <ContDescription />
        </Route>

        <Route path="/filter/:fil">
          <CategoryFilter />
        </Route>

        <Route path="/nosotros">
          <Nosotros />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/resumen">
          <Resumen />
        </Route>

        <Route path="/checkout">
          <CheckOut />
        </Route>

        <Route path="*">
          <Error404 />
        </Route>

      </Switch>
      <Footerbh />
    </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
