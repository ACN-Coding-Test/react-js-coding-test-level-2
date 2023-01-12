import Countdown from 'components/countdown'
import TextWithEllipsis from 'components/textWithEllipsis'
import Title from 'components/title'
import Image from 'next/image'
import { ProductInterface } from 'pages'

interface FlashSaleProps {
  products: ProductInterface[]
}

export default function FlashSale({ products }: FlashSaleProps) {
  return (
    <div className="mt-4">
      <Title>Flash Sale</Title>
      <div className="mt-0.5 rounded-sm bg-white pb-2">
        <div className="flex items-center justify-between border-b border-b-border-gray px-4 py-3">
          <div className="flex items-center">
            <div className="mr-24 text-sm text-primary">On Sale Now</div>
            <div>Ending</div>
            <Countdown time={39000} />
          </div>
          <button className="flex items-center justify-center rounded-sm border border-primary px-2.5 text-sm font-medium leading-9 text-primary">
            SHOP ALL PRODUCTS
          </button>
        </div>
        <div className="mt-3 flex flex-wrap pb-3">
          {products.map((product, index) =>
            index > 5 ? null : (
              <div
                key={product.id}
                className="w-1/6 cursor-pointer hover:shadow-xl"
              >
                <Image
                  src={product.image}
                  height={138}
                  width={188}
                  alt={''}
                  className="h-44 w-36"
                />
                <div className="px-1 py-1 text-sm text-black">
                  <TextWithEllipsis text={product.title} numberOfLines={2} />
                  <div className="text-lg text-primary">RM${product.price}</div>
                  <div className="flex text-xs text-light-gray">
                    <div className="line-through">RM25.00</div>
                    <div className="ml-1 text-black"> -60%</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
