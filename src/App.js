import React from "react";
import './App.css'
import {Feature, Footer,  Header, Application, Categories} from './containers';
import { Brand, Navbar} from  './components';


function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    
    <Brand />
    <Categories/>
    <Feature/> 
    <Application/>
    <Footer />
  </div>
  </div>
  );
}

export default App;
