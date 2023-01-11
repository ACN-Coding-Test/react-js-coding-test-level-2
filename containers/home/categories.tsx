import TextWithEllipsis from "components/textWithEllipsis"
import Title from "components/title"
import Image from "next/image"
import { ProductInterface } from "pages"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
    { name: "Mobiles", image: "https://lzd-img-global.slatic.net/live/my/p/07113cd3efd35cde99d2d21a340eb9f3.jpg_80x80q80.jpg_.webp" },
    { name: "Women's Dresses", image: "https://lzd-img-global.slatic.net/live/my/p/0dc6dc5785c70e67f9f281b9c50f27e4.jpg_80x80q80.jpg_.webp" },
    { name: "Men's T-shirts", image: "https://lzd-img-global.slatic.net/g/p/143b5233704f0646702fccd3cc063100.jpg_80x80q80.jpg_.webp" },
    { name: "First Aid Masks", image: "https://lzd-img-global.slatic.net/g/p/mdc/d80d9b355cf7392b5f09dedc90492500.jpg_80x80q80.jpg_.webp" },
    { name: "Dried Fruit, Nuts & Seeds", image: "https://lzd-img-global.slatic.net/g/p/c8ca35a960dfe8da0ed22fff435f2130.jpg_80x80q80.jpg_.webp" },
    { name: "Wireless Earbuds", image: "https://lzd-img-global.slatic.net/g/p/92802625228b81d2929acdb6ebef6e49.jpg_80x80q80.jpg_.webp" },
    { name: "Smartwatches", image: "https://lzd-img-global.slatic.net/g/p/41c0195b9441600b4ccd03d7bd72e66b.jpg_80x80q80.jpg_.webp" },
    { name: "Tablets", image: "https://lzd-img-global.slatic.net/g/p/3f742d6125bd26ca302a5a8d58ca5bad.jpg_80x80q80.jpg_.webp" },
    { name: "Women's Blouses", image: "https://lzd-img-global.slatic.net/g/p/mdc/7a5f58546efab6a615fe07fcdbe89e60.jpg_80x80q80.jpg_.webp" },
    { name: "Bed Sheets", image: "https://lzd-img-global.slatic.net/g/p/9139569dcc0b9bc706b0f89c4443ab0b.jpg_80x80q80.jpg_.webp" },
    { name: "Rugs & Carpets", image: "https://lzd-img-global.slatic.net/live/my/p/ae7d33926e01d80ad1a58302bf24f7a4.jpg_80x80q80.jpg_.webp" },
    { name: "Kitchen Organizers", image: "https://lzd-img-global.slatic.net/g/p/d9d6d94287c6e4a92621235db1096d19.jpg_80x80q80.jpg_.webp" },
    { name: "Monitors", image: "https://lzd-img-global.slatic.net/g/p/490d8cb49f0286d33ac78c083cfdce0a.jpg_80x80q80.jpg_.webp" },
    { name: "Food Storage & Dispensers", image: "https://lzd-img-global.slatic.net/g/ff/kf/S3d18f362a2d74b8d8faac52a1f07baa08.jpg_80x80q80.jpg_.webp" },
    { name: "Phone Wall Chargers", image: "https://lzd-img-global.slatic.net/g/p/e7acdd89b001e0b0896937a6c566c820.jpg_80x80q80.jpg_.webp" },
    { name: "Mobile Phone Cases", image: "https://lzd-img-global.slatic.net/live/my/p/1badecfd9c4f8ace3f0da7b408c803f8.jpg_80x80q80.jpg_.webp" },
]

export default function Categories() {
    return <div className="mt-7">

        <div className="mt-0.5 pb-2">
            <div className="flex items-center justify-between">
                <Title>Categories</Title>
            </div>
            <div className="flex flex-wrap pb-3 mt-0.5">
                {categories.map((c) => <div style={{ width: 148.5, height: 148.5 }} className="hover:shadow cursor-pointer bg-white border-b border-r border-r-light-gray border-b-light-gray p-8 text-center flex justify-center items-center">
                    <Image src={c.image} height={80} width={80} alt={""} className="h-20 w-20" />
                    <div className="text-sm">
                        {c.name}
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
}
