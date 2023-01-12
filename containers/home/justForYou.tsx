import RatingStar from 'components/ratingStar'
import TextWithEllipsis from 'components/textWithEllipsis'
import Title from 'components/title'
import Image from 'next/image'
import { ProductInterface } from 'pages'

interface JustForYouProps {
  products: ProductInterface[]
}

export default function JustForYou({ products }: JustForYouProps) {
  return (
    <div className="mt-4">
      <Title>Just For You</Title>
      <div className="mt-0.5 rounded-sm pb-2">
        <div className="mt-0.5 flex flex-wrap pb-3">
          {products.map((product, index) => (
            <div className="mb-5 w-1/6 cursor-pointer">
              <div
                key={product.id}
                className={`${
                  (index + 1) % 6 ? 'mr-2.5' : ''
                } h-full bg-white pb-2 hover:shadow-xl`}
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
                  <RatingStar
                    rating={product.rating.rate}
                    count={product.rating.count}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center border-b border-border-light-gray pb-2">
        <button className="flex w-96 justify-center rounded-sm border border-tint py-2 text-tint">
          LOAD MORE
        </button>
      </div>
      <div className="my-6 flex">
        <div className="mr-3 h-24">
          <Image
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1.9JSKrvpK1RjSZFqXXcXUVXa.jpg"
            height={97}
            width={388}
          />
        </div>
        <div className="mr-3 h-24">
          <Image
            src="https://icms-image.slatic.net/images/ims-web/245593b5-12b7-473b-89c0-a1a8fd52ac8d.jpg"
            height={97}
            width={388}
          />
        </div>
        <div className="h-24">
          <Image
            src="https://icms-image.slatic.net/images/ims-web/b3b7ea8a-f506-47f3-bc3f-5d407f500394.jpg"
            height={97}
            width={388}
          />
        </div>
      </div>
    </div>
  )
}
