import TextWithEllipsis from "components/textWithEllipsis"
import Title from "components/title"
import Image from "next/image"
import { ProductInterface } from "pages"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface LazMallProps {
    products: ProductInterface[];
}

export default function LazMall({ products }: LazMallProps) {
    return <div className="mt-7">

        <div className="mt-0.5 pb-2">
            <div className="flex items-center justify-between">
                <Title>LazMall</Title>
                <div className="flex items-center">
                    <button className="text-tint text-sm leading-9 flex justify-center items-center font-medium rounded-sm px-2.5">See More</button>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-tint text-sm"
                    />
                </div>
            </div>
            <div className="flex flex-wrap pb-3">
                {products.map((product, index) => (index < 6 || index > 11 ? null :
                    <div key={product.id} className="flex-1 mr-3 shadow-lg hover:shadow cursor-pointer bg-white rounded-sm">
                        <Image src={product.image} height={138} width={188} alt={""} className="h-44 w-36" />
                        <div className="px-1 py-1 text-sm text-black text-center">
                            <div className="w-full -mt-10 flex justify-center">
                                <div className="shadow border border-white">
                                    <Image src={product.image} height={50} width={50} alt={""} className="h-12 w-12" />
                                </div>
                            </div>
                            <div className="px-4 py-3">
                                <TextWithEllipsis text={product.title} numberOfLines={1} />
                                <div className="text-light-gray text-xs">
                                    SweetDream Official
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}