import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import productService from "./services/product";
import ProductRes from "./types/requestProduct";
import Product from "./types/product";
import SearchIcon from "./assets/search-icon.svg";

function App() {

  const [productRes, setProductRes] = useState<ProductRes>()
  const [searchValue, setSearchValue] = useState<string>("")
  
  const handleChange = (e: any) => {
    //@ts-ignore
    setSearchValue(e.target.value)
  }

  const searchProduct = (search: string) => {
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
    <div className="App">
        {/* <input type="text" onChange={handleChange} id="search" /> */}
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" onChange={handleChange} value={searchValue} placeholder="Kwark..."/>
            <button type="submit" className="searchButton">
              <img src={SearchIcon} alt="search icon"/>
            </button>
          </div>
        </div>
        <div className='products-list'>
          {productRes && 
            productRes?.products.map((product: Product) => (
              <ProductCard product={product}/>
            ))
          }
        </div>
    </div>
  );
}

export default App;
