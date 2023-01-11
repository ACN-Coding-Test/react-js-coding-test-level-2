import HomeSlider from "components/slider";
import { ProductInterface } from "pages";
import Categories from "./categories";
import FlashSale from "./flashSale";
import LazMall from "./lazMall";
import Options from "./options";

interface HomeContainerProps {
    products: ProductInterface[];
}

export default function HomeContainer({ products }: HomeContainerProps) {
    return <div className="">
        <HomeSlider />
        <div className="w-content m-auto">
            <Options />
            <FlashSale products={products} />
            <LazMall products={products} />
            <Categories />
        </div>
    </div>
}