import React from "react";
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import dynamic from "next/dynamic";

import { Product, Cart } from '../interfaces'

type Props = {
  data: Product[]
  cart: Cart[]
}

const GeneratePDF = dynamic(()=>import("./GeneratePDF"),{ssr:false});

ChartJS.register(ArcElement, Tooltip, Legend);

const Receipt = ( {data, cart} : Props ) => {

  const getPrice = (id : number) => {
    for (var i=0; i < data.length; i++) {
      if (data[i].id === id) {
          return data[i];
      }
    }
  }

  const chartData = {
    labels: cart.map( item => item.productId),
    datasets: [
      {
        label: 'PRICE PIE CHART',
        data: cart.map( item => getPrice(item.productId)?.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
  
    <div id="print" className="flex flex-col mt-5 hidden md:block" >
      
      <div className="flex justify-center">
        <div className="p-4 text-xl">CART DETAILS</div>
      </div>


      <table className="shadow-lg mb-10">
        <tr>
        <th className="bg-blue-500 border text-left px-8 py-4">PRODUCT ID</th>
          <th className="bg-blue-500 border text-left px-8 py-4">PRODUCT NAME</th>
          <th className="bg-blue-500 border text-left px-8 py-4">PRICE</th>
          <th className="bg-blue-500 border text-left px-8 py-4">QTY</th>
        </tr>

        { cart && 
              cart.map((item, i) => 
          <tr key={i}>
            <td className="border px-8 py-4">{item.productId}</td>
            <td className="border px-8 py-4">{getPrice(item.productId)?.title}</td>
            <td className="border px-8 py-4">{getPrice(item.productId)?.price}</td>
            <td className="border px-8 py-4">{item.quantity}</td>
          </tr>
        )}

      </table>

      <div className="w-1/4">
        <Pie data={chartData} />  
      </div>  

      <div className="flex justify-center">
          <GeneratePDF />
      </div>

    </div>  

    );
  }
  
export default Receipt;