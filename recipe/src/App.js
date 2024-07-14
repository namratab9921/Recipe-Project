
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/Stylenew.css';
import Dashboard from './Components/Dashboard';
//import Login from './Components/Login';
import Maindashboard from './Components/Maindashboard';
import Unit from './Components/Unit';
import './Components/assets/css/style.css';
import './Components/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './Components/assets/vendor/boxicons/css/boxicons.css'
import React from 'react';
import Ingredients from './Components/Ingredients';
import Recipes from './Components/Recipes';
import Orders from './Components/Orders';
import Items from './Components/Items';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />}>
            <Route index element={<Maindashboard />} />
            <Route path={"/unit"} element={<Unit />}></Route >
            <Route path={"/ingredient"} element={<Ingredients />}></Route>
            <Route path={"/recipe"} element={<Recipes />}></Route>
            <Route path={"/orders"} element={<Orders />}></Route>
            <Route path={"/recipe/items/:receipeId"} element={<Items />}></Route>
          </Route >

        </Routes>
      </BrowserRouter >
    </div >

  );
}

export default App;
