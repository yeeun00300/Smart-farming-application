import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Routes,Route} from "react-router-dom"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

import ChitChat from "./chat/ChitChat";



 const App=()=>{
return(
    <>
<Navbar />
   <Routes>
   <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />}  />
    <Route path="/feedback" element={<Contact />}  />
    <Route path="/ChitChat" element={<ChitChat/>}  />
   
</Routes>
<Footer />
    </>
);
}
export default App;