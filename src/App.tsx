import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductRes from './types/requestProduct';
import productService from './services/product';

function App() {

  //@ts-ignore
  const [productRes, setProductRes] = useState<ProductRes>({})
  const [searchValue, setSearchValue] = useState<string>("")
  
  const handleChange = (e: any) => {
    //@ts-ignore
    setSearchValue(e.target.value)
  }

  const searchProduct = (search: string) => {
    console.log(search);
    
    productService.getProducts(search)
      .then((res: ProductRes) => {
        setProductRes(res);
      })
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => searchProduct(searchValue), 300);
    return () => clearTimeout(timeoutId);
    
  }, [searchValue]);  


  return (
    //@ts-ignore
    <ShoppingCartProvider products={productRes?.products}>
      <Navbar handleSearch={handleChange} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home products={productRes?.products} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;