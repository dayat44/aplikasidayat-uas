import React, { useState, createContext, useReducer, Fragment } from 'react';
// import BootsrapComp from './Component/Fungsional/Class/BootsstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import About from './Component/Fungsional/AboutComp';
// import DetailComp from './Component/Fungsional/DetailComp';

import TambahComp from './Component/Fungsional/Class/TambahComp';
import EditComp from './Component/Fungsional/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
/* import HooksReducer from './Component/Hooks/Functional/HooksReducer'; */
/* import Tagihan from './Component/Hooks/Functional/Tagihan'; */
import RegisterComp from './Component/RegisterComp';

import HomeComp from './Component/HomeComp';
import MenuComp from './Component/MenuComp';
import ListComp from './Component/Fungsional/Class/ListComp';
import LoginComp from './Component/LoginComp';
import HomePage from './Component/Fungsional/HomePage';


//Context
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
      default:
        return state
  }
}

const App = () => {

  const [value, setValue] = useState(0)

  const[state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
    <CartContext.Provider value={{ value, setValue }}>
    <NavbarComp />
    <Switch>
      <AuthContext.Provider value={{
        state,
        dispatch
      }}>
        <MenuComp />
        {!state.isAuthenticated ?
        <Redirect
      to={{
        pathname: "/home"
      }}
      /> :
      <Redirect
      to={{
        pathname:"/transaksi"
      }}
      />}
      

    
    
    <Route exact path="/about" component={About} />
    <Route exact path="/home" component={LoginComp}/>
    <Route exact path="/homepage" component={HomeComp}/>
    <Route exact path="/register" component = {RegisterComp}/>
    <Route exact path="/transaksi" component = {ListComp}/>
    <Route exact path="/transaksi/tambah" component= {TambahComp}/>
    <Route exact path="/transaksi/edit" component={EditComp}/>
    <Route exact path="/utama" component={HomePage}/>
      </AuthContext.Provider>
      </Switch>
      </CartContext.Provider>
      </BrowserRouter>

  );
}

export default App;


