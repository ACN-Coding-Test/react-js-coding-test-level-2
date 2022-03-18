import React, { ReactNode } from "react";

import Header from "./Header";

import Footer from "./Footer";

type Props = {
  children?: ReactNode
}

const Layout = ({ children, ...pageProps } :Props) => {

    return (
      <div className="bg-gray-100 font-family-karla flex">

        <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
          <Header />

          <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow px-20 pb-20">

              {children}
            
            </main>
          </div>

          <Footer />
        </div>

      </div>
    );
  
};

export default Layout