import React, { useState } from "react";
import Link from 'next/link';
import Modal from "react-modal";
import { Product, Cart } from '../interfaces'

type Props = {
  data: Product[]
  category: []
  cart: Cart[]
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "black",
    color: "white",
  },
  overlay: { backgroundColor: "grey" },
};

const Tablet = ( {data, category, cart} : Props ) => {

    const [text, setText] = useState('');
    const [products, setProducts] = useState(data);
    const [selectCat, setSelectCat] = useState('');
    const [selectPage, setSelectPage] = useState(0);
    const [isPage, setIsPage] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [sortName, setSortName] = useState('');
    const [sortCat, setSortCat] = useState('');
    const [sortPrice, setSortPrice] = useState('');

    const searchingFor = (searchText : string) => {
      return (x : any) => {
        return (
          x.title.toLowerCase().includes(searchText.toLowerCase()) || !searchText
        );
      };
    };

    const search = (e : any) => {
      setSelectCat('')
      setSelectPage(0)
      setIsPage(false)
      setText(e.target.value)
      const searchresult = data.filter(searchingFor(e.target.value))
      setProducts(searchresult);
    }

    const categorize = (cat : string) => {
      setText('')
      setSelectPage(0)
      setIsPage(false)
      setSelectCat(cat)

      let filtered = data.filter( x => 
        x.category === cat 
      );
      setProducts(filtered);
    }

    const resetPage = () => {
      setText('')
      setSelectCat('')
      setSelectPage(0)
      setIsPage(false)
      setProducts(data);
    }

    const paginate = (page : number) => {
      setText('')
      setSelectCat('')
      setSelectPage(page)
      setIsPage(true)
      let slice = data.slice(page*5, (page*5)+5)
      setProducts(slice)
    }

    const sortingName = () => {
      if (sortName === '' || sortName === 'desc') {
        setProducts((arr) => [...arr].sort((a, b) => a.title.localeCompare(b.title)));
        setSortName('asc')
      } else {
        setProducts((arr) => [...arr].sort((a, b) => b.title.localeCompare(a.title)));
        setSortName('desc')
      }
    }

    const sortingCat = () => {
      if (sortCat === '' || sortCat === 'desc') {
        setProducts((arr) => [...arr].sort((a, b) => a.category.localeCompare(b.category)));
        setSortCat('asc')
      } else {
        setProducts((arr) => [...arr].sort((a, b) => b.category.localeCompare(a.category)));
        setSortCat('desc')
      }
    }

    const sortingPrice = () => {
      if (sortPrice === '' || sortPrice === 'desc') {
        setProducts((arr) => [...arr].sort((a, b) => a.price - b.price));
        setSortPrice('asc')
      } else {
        setProducts((arr) => [...arr].sort((a, b) => b.price - a.price));
        setSortPrice('desc')
      }
    }

    const getPrice = (id : number) => {
      for (var i=0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i];
        }
      }
    }

    return (
  
      <div className="flex flex-col mt-5 hidden md:block">
        <button type="button" onClick={() => setIsModal(true)} className="absolute top-20 right-10 bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2">FLOATING BUTTON</button>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle dark:bg-gray-800">
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" onChange={search} value={text} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
              </div>
              <div className="pt-1">{ products && products.length } result(s)</div>
            </div>

            <div className="flex justify-between">
         
              <nav aria-label="Page navigation">
                <ul className="inline-flex -space-x-px p-4">

                  { category && 
                      category.map((item, i) => 
                        <li key={i}>
                          <button type="button" onClick={() => categorize(item)} 
                                  className={selectCat === item ? "mr-4 py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "mr-4 py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                          >{item}</button>
                        </li>
                      )
                  }

                </ul>
              </nav>
                 
              <nav aria-label="Page navigation">
                <ul className="inline-flex -space-x-px p-4">
                  <li>
                    <button type="button" onClick={resetPage} className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">All</button>
                  </li>

                  {[...Array(Math.floor(data && data.length / 5))].map((item, i) => ( 
                        <li key={i}>
                          <button type="button" onClick={() => paginate(i)}  
                                  className={isPage && (selectPage === i) ? "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                          >{i+1}</button>
                        </li> 
                      ) 
                  )}

                </ul>
              </nav>

            </div>
            
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4"><span className="sr-only">Image</span></th>
                    <th scope="col" onClick={sortingName} className="cursor-pointer py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                       Product Name 
                    </th>
                    <th scope="col" onClick={sortingCat} className="cursor-pointer py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                       Category 
                    </th>
                    <th scope="col" onClick={sortingPrice} className="cursor-pointer py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                       Price 
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                { products && 
                  products.map((item, i) => 
  
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={i}>
                    <td><img src={item.image}></img></td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.title}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{item.category}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.price}</td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <Link href="/receipts">
                      <a className="text-blue-600 dark:text-blue-500 hover:underline">
                      <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">BUY</button>
                      </a>
                      </Link>
                    </td>
                  </tr>

                )}

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/******** modal **** */}

        <Modal
          isOpen={isModal}
          contentLabel={"Cart Details"}
          onRequestClose={() => {
            setIsModal(false)
          }}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="flex justify-center">
            <div className="p-4 text-xl">CART DETAILS</div>
          </div>


          <table className="shadow-lg">
            <tr>
              <th className="bg-blue-500 border text-left px-8 py-4">PRODUCT NAME</th>
              <th className="bg-blue-500 border text-left px-8 py-4">PRICE</th>
              <th className="bg-blue-500 border text-left px-8 py-4">QTY</th>
            </tr>

            { cart && 
                  cart.map((item, i) => 
              <tr key={i}>
                <td className="border px-8 py-4">{getPrice(item.productId)?.title}</td>
                <td className="border px-8 py-4">{getPrice(item.productId)?.price}</td>
                <td className="border px-8 py-4">{item.quantity}</td>
              </tr>
            )}

          </table>


        </Modal>

      </div>

      
    );
  }
  
  const Table = React.memo(Tablet);
  export default Table;