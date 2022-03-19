import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import Receipt from '../components/Receipt';

const storeapi = 'https://fakestoreapi.com/products';
const storecartapi = 'https://fakestoreapi.com/carts/user/2';

function Receipts() {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
    
      const fetchData = async () =>{
        setIsLoading(true);
        try {
          const response = await axios.get(storeapi);
          setProducts(response.data)
          console.log(response.data)

          const cart_response = await axios.get(storecartapi);
          setCart(cart_response.data[0].products)
          console.log(cart_response.data)
          console.log(cart_response.data[0].products)

        } catch (error: any) {
          console.error(error.message);
        }
        setIsLoading(false);
      }
  
      fetchData();

    }, []); 
  

    return (

      <>
      <div className="w-full flex justify-center">

        { isLoading &&      
            <div className="w-full flex justify-center">      
              <ReactLoading color="orange" /> 
            </div>    
        }

        { products && !isLoading &&      
            <Receipt data={products} cart={cart} />
        }

      </div>
      </>

    )
}

export default Receipts