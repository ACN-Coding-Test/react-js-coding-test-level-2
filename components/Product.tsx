import { Product } from '../interfaces'

type Props = {
  data: Product[]
}

const Product = ( {data} : Props ) => {

    return (
  
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={data.image} alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {data.title}
              </a>
            </h3>
      
          </div>
          <p className="text-sm font-medium text-gray-900">${data.price}</p>
        </div>
      </div>
      
    );
  }
  
  export default Product;