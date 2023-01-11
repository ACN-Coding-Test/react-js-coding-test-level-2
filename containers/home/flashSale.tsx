import TextWithEllipsis from "components/textWithEllipsis"
import Title from "components/title"
import Image from "next/image"
import { ProductInterface } from "pages"

interface FlashSaleProps {
    products: ProductInterface[];
}

export default function FlashSale({ products }: FlashSaleProps) {
    return <div className="mt-4">
        <Title>Flash Sale</Title>
        <div className="bg-white rounded-sm mt-0.5 pb-2">
            <div className="px-4 py-3 flex items-center justify-between border-b border-b-border-gray">
                <div className="flex items-center">
                    <div className="mr-24 text-primary text-sm">On Sale Now</div>
                    <div>Ending</div>
                    <div className="text-white flex items-center ml-4">
                        <div className="h-9 w-10 bg-red-600 flex justify-center items-center rounded-sm">03</div>
                        <div className="text-gray px-2 text-sm">:</div>
                        <div className="h-9 w-10 bg-red-600 flex justify-center items-center rounded-sm">04</div>
                        <div className="text-gray px-2 text-sm">:</div>
                        <div className="h-9 w-10 bg-red-600 flex justify-center items-center rounded-sm">43</div>
                    </div>
                </div>
                <button className="border border-primary text-primary text-sm leading-9 flex justify-center items-center font-medium rounded-sm px-2.5">SHOP ALL PRODUCTS</button>
            </div>
            <div className="mt-3 flex flex-wrap pb-3">
                {products.map((product, index) => (index > 5 ? null :
                    <div className="w-1/6 hover:shadow-xl cursor-pointer">
                        <Image src={product.image} height={138} width={188} alt={""} className="h-44 w-36" />
                        <div className="px-1 py-1 text-sm text-black">
                            <TextWithEllipsis text={product.title} numberOfLines={2} />
                            <div className="text-primary text-lg">RM${product.price}</div>
                            <div className="text-light-gray text-xs flex">
                                <div className="line-through">RM25.00</div>
                                <div className="text-black ml-1"> -60%</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}