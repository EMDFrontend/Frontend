import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {Suspense,lazy} from "react";
import './App.css';

const Home = lazy(() => import("./components/home/home.component"));
const About =lazy(() => import('./components/about/about.component'));

export function ApplicationLoader(){

    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
}

function App() {
  return (
    <div className="App" >
      <Router>
      <Suspense fallback={<ApplicationLoader/>}>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
