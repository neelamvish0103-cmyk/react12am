import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from './components/Footer';
import AdmineDashboards from "./components/Dashboard/AdmineDashboards";
import Adminedashboardcontent from "./components/Dashboard/Adminedashboardcontent";
import Alluser from "./components/Dashboard/Alluser";
import Categories from "./components/Dashboard/categories";
import Products from "./components/Dashboard/products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path='product/:name' element={<Product />} /> */}
          </Route>
          {/* <adminedashboards/> */}
          <Route path='/AdmineDashboards' element={<AdmineDashboards />}>
            <Route index element={<Adminedashboardcontent />} />
            <Route path="Alluser" element={<Alluser />} />
             <Route path="categories" element={<Categories />} />
             <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;