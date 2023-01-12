import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return <header className="flex justify-between bg-white">
        <div className='w-content m-auto flex justify-between py-4 items-center'>
            <div>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={127}
                    height={40}
                />
            </div>
            <div className='flex items-center'>
                <div className='flex h-11'>
                    <input placeholder='Search in Lazada' className='bg-light-gray2 text-gray rounded-sm h-full text-sm py-3 px-5 focus:border-0 focus:outline-0' style={{ width: '688px' }} />
                    <div className='bg-primary h-full w-11 flex justify-center items-center rounded-sm'>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-white"
                        />
                    </div>
                </div>
                <div className='ml-5'>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-dark-blue text-xl"
                    />
                </div>
            </div>
            <div>
                <Image
                    src="/images/wallet.png"
                    alt="Logo"
                    width={188}
                    height={45}
                />
            </div>

        </div>

    </header>
}