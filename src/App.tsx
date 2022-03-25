import { Router, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import './App.css';

const Home = lazy(() => import("./components/home/home.component"));

function App() {
  return (
    <div className="App">
        {/* <Router history={history}>
       <Route exact path="/" component={Home} />
       </Router>  */}
       <Home/>
    </div>
  );
}

export default App;
