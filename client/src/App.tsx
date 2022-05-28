import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './Paginas/Home';
import Carrito from './Paginas/Carrito';

import {TodoProvider} from './Context/TodoProvider';
import Login from './Paginas/Login';
import Register from './Paginas/Register';
import { HomeComercio } from './Paginas/HomeComercio';


function App() {

  const handlerLogg = () => {
    
  }
  return (
    <>
    <TodoProvider>
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/carrito' element={<Carrito />}/>
        <Route path='/comercio' element={<HomeComercio />}/>
        
      </Routes>
    </TodoProvider>
      
    </>
  );
}

export default App;
