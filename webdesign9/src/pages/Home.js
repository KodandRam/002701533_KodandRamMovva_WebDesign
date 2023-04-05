import React from "react";
//import { Link } from 'react-router-dom'
import Navbar from '../components/Login/Navbar'
import Card from "../components/Login/Card";
// import Login from '../components/Login/Login';
//import Home from './pages/Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Jobs from './Jobs';
import CardData from "../components/Login/CardData";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";

function Home() { 
  return (
    <>
    <div className="home-cards"><Card details ={CardData} /></div>

    {/* <section className="sec">
      <h1>This is the Home Section!!!!</h1>
    </section> */}
    </>
  )

/* <>
    
<Router>
<Navbar />
  <Routes>
  { <Route path='/'component={Login} exact><Login /></Route> }
  <Route path='/home'element={<Home/>}>     
  </Route>
  <Route path='/aboutUs'element={<AboutUs/>}>     
  </Route>
  <Route path='/contactUs'element={<ContactUs/>}>     
  </Route>
  <Route path='/jobs'element={<Jobs/>}>     
  </Route> 
  </Routes>
  
</Router>
</> */
}

export default Home;
