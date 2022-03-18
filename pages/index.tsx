import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import Product from '../components/Product';

const storeapi = 'https://fakestoreapi.com/products';

function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
    
      const fetchData = async () =>{
        setIsLoading(true);
        try {
          const response = await axios.get(storeapi);
          setProducts(response.data)
          console.log(response.data)

        } catch (error : any) {
          console.error(error.message);
        }
        setIsLoading(false);
      }
  
      fetchData();

    }, []); 
  

    return (

      <>
      <div className="w-full flex">

        { isLoading &&      
            <div className="w-full flex justify-center">      
              <ReactLoading color="orange" /> 
            </div>    
        }

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">


          { products && !isLoading &&
              products.map((item, i) => 
                  <Product data={item} key={i}/>
              )
          }

        </div>

      </div>
      </>

    )
}

export default Home