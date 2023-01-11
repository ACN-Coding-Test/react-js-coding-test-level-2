import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

export default function HomeSlider() {
    return <div className="bg-red-900 flex justify-center">
        <div className="w-52 bg-white border-t border-t-bg-gray">
            <ul className="text-xs text-menu-text py-1">
                {['Electronic Accessories', 'Electronic Devices', 'TV & Home Appliances', 'Halth & Beauty', 'Babbies & Toys', 'Groceries & Pets', 'Home & Lifestyle', 'Womens Fashion & Access...', 'Mens Fashion & Accessories', 'Kids Fashion & Accessories', 'Sports & Lifestyle', 'Automotive & Motorcycles'].map(item => (
                    <li className="hover:text-primary leading-7 hover:bg-bg-gray cursor-pointer pl-2">{item}</li>
                ))}
            </ul>
        </div>
        <Carousel showStatus={false} showThumbs={false} width={1000} showArrows={false}>
            <div className="h-36">
                <img
                    src="/images/slider/slider-1.jpg"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-2.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-3.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-4.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-5.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-6.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-7.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-8.webp"
                    alt="banner"
                />
            </div>
            <div>
                <img
                    src="/images/slider/slider-9.webp"
                    alt="banner"
                />
            </div>
        </Carousel>
    </div>
}