import React from 'react';

import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import CheerfulUsers from "./components/CheerfulUsers/CheerfulUsers";

import './App.css';
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
        <Header/>
        <AboutMe/>
        <CheerfulUsers/>
        <Registration />
        <Footer/>
    </div>
  );
}

export default App;
