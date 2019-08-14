import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;

