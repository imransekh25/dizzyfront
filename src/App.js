import logo from './logo.svg';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './componenet/Home/home';
import Product from './componenet/Product/product'
import Category from './componenet/Category/category'
import Header from './componenet/Header/header';
import Footer from './componenet/Footer/footer';
import AppContext from './Utils/context';

function App() {
  return (
    <BrowserRouter>
      <AppContext>
      <Header/>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/product/allProducts" element={<Product/>} />
          <Route path = "/category " element={<Category/>} />
        </Routes>
      <Footer/>
      </AppContext>
      
    </BrowserRouter>
  );
}

export default App;
