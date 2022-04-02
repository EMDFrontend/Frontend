import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {Suspense,lazy} from "react";
import './App.css';
import Footer from "./components/footer/footer.component";

const Navbar = lazy(
  () => import('./components/navbar/navbar.component'));
const Home = lazy(() => import("./components/home/home.component"));
const About =lazy(() => import('./components/about/about.component'));
const Order = lazy(()=>import("./components/order/order.component"));
export function ApplicationLoader(){

    return (
      <div className="lds-ring">
        <div>dasdsdsa</div>
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
            <Route path="/order" element={<Order/>}></Route>
          </Routes>
           <Navbar /> 
          
        <Footer />
        </Suspense>
      </Router>
  </div>
  );
}

export default App;
