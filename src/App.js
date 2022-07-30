import React from "react";
import './App.css'
import {Feature, Footer,  Header, Application} from './containers';
import { Navbar, HIW} from  './components';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      
    <HIW/>
    <Feature/> 
    <Application/>
    <Footer />
  </div>
  </div>
  );
}

export default App;
