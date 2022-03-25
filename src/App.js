import { Router, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import './App.css';

const Home = lazy(() => import("../src/components/home/home.component"));

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
