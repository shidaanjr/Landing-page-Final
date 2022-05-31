import React from "react";
import './App.css'
import {Feature, Footer,  Header, Application, Categories} from './containers';
import { Brand, Navbar} from  './components';
import {HIW} from './components/HIW/HIW'

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    
    <Brand />
    <HIW/>
    <Categories/>
    <Feature/> 
    <Application/>
    <Footer />
  </div>
  </div>
  );
}

export default App;
