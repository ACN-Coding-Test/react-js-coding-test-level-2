
const Header = () => {

  return (

    <header className="w-full flex items-center justify-between h-20 bg-white py-2 px-20">
   
      <img className="w-40" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1HKyxaMFY.1VjSZFqXXadbXXa.png" />
      <div className="input-group relative flex items-stretch w-1/2">
        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none hidden md:block" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
        <button className="btn inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out flex items-center hidden md:block" type="button" id="button-addon2">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
        </button>
        <a href="#" className="flex items-center ml-10">
          <svg className="flex-shrink-0 h-10 w-10 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </a>
      </div>
      <img className="w-40 hidden md:block" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB19FLZi8r0gK0jSZFnXXbRRXXa.png" />
 
    </header>
    
  );
}

export default Header;