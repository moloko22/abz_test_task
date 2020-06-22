import React from 'react';

import {Provider} from "react-redux";
import store from "./store/store";

import './App.scss';
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import CheerfulUsers from "./components/CheerfulUsers/CheerfulUsers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
        <Provider store={store}>
            <Header/>
            <AboutMe/>
            <CheerfulUsers/>
            <Registration />
            <Footer/>
        </Provider>
    </div>
  );
}

export default App;
