import './App.css';
import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import MemeGenerated from './MemeGenerated';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  return (
    <div className="main">
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={(<Meme/>)} />
          <Route path='/generated' element={(<MemeGenerated />)} />
        </Routes>
    </Router>
    </div>
  );
};

export default App;
