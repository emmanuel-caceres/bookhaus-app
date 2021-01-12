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

import {Store} from './Store';

function App() {

  const [data, setData] = useState({
    productos: [],
    cantidad: 0,
  });

  return (
    <Store.Provider value={[data, setData]}>
    <BrowserRouter>
      <Menubh />
      <Categorias />
      <Switch>
        
        <Route exact path="/">
          <Carrousel />
          <CardCont />
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

        <Route path="/resumen">
          <Resumen />
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
