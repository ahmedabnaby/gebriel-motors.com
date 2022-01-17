import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/MainPages/Home"
import Header from "./Includes/Header"
// import Footer from "./Includes/Footer"

function App() {
  return (
    <Router>

    <div>

      <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='/veichles' element={<Veichles/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/our-benfits' element={<Benfits/>} /> */}
          </Routes>
      {/* <Footer/> */}
      

    </div>
    </Router>
  );
}
// function Products() {
//   return <h2>Products</h2>;
// }

// function Services() {
//   return <h2>Services</h2>;
// }

// function Veichles() {
//   return <h2>Veichles</h2>;
// }

// function Benfits() {
//   return <h2>Benfits</h2>;
// }
export default App;
