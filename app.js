
import './App.css';
import Product from './components/product'
import { Box, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';



function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch('/products',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
      })
      const json = await data.json()
      return json;
    }

    const result = fetchProducts()
    result
    .then((data) => {
      setProducts(data)
    })
    .catch((err) => console.error(err))
    
  }, [])

  return (
    <Flex justifyContent={'space-around'}>
      {products.length > 0 
      ? products.map((p,i) => (
        <Product
          key={i}
          product={p} 
        />
      ))
      : <Box>
          No Product
        </Box>
      }
    </Flex>
  );
}

export default App;
