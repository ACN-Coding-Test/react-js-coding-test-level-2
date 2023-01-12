import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BottomMenu() {
  return (
    <section className="flex justify-between py-5">
      <div className="m-auto flex w-content justify-between py-4">
        <div className="flex flex-1 justify-between text-light-blue">
          <div className="flex-1">
            <h3 className="text-base">CONTACT US</h3>
            <ul className="mt-1 text-xs">
              <li className="cursor-pointer hover:underline">Help Center</li>
              <li className="cursor-pointer hover:underline">How to Buy</li>
              <li className="cursor-pointer hover:underline">
                Shipping & Delivery
              </li>
              <li className="cursor-pointer hover:underline">
                International Product Policy
              </li>
              <li className="cursor-pointer hover:underline">How to Return</li>
              <li className="cursor-pointer hover:underline">Question?</li>
              <li className="cursor-pointer hover:underline">Contact Us</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Lazada</h3>
            <ul className="mt-1 text-xs">
              <li className="cursor-pointer hover:underline">All Categories</li>
              <li className="cursor-pointer hover:underline">About Lazada</li>
              <li className="cursor-pointer hover:underline">
                Corporate Voucher Purchase
              </li>
              <li className="cursor-pointer hover:underline">
                Afﬁliate Program
              </li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
              <li className="cursor-pointer hover:underline">
                Campaign Terms & Conditions
              </li>
              <li className="cursor-pointer hover:underline">
                Intellectual Property Protection
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="mr-9 flex items-start">
            <div className="flex">
              <Image
                src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1iTziekWE3KVjSZSyXXXocXXa-42-42.png"
                height={42}
                width={42}
              />
            </div>
            <div className="ml-2">
              <div className="text-base text-primary">
                Go where your heart beats
              </div>
              <div className="text-sm text-light-blue">Download the App</div>
            </div>
          </div>
          <div className="">
            <div className="mb-2.5 flex">
              <div>
                <Image
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01brmkRW21eAmpV4slQ_!!6000000007009-2-tps-126-42.png"
                  height={42}
                  width={126}
                />
              </div>
              <div className="ml-2.5">
                <Image
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01brmkRW21eAmpV4slQ_!!6000000007009-2-tps-126-42.png"
                  height={42}
                  width={126}
                />
              </div>
            </div>
            <Image
              src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01brmkRW21eAmpV4slQ_!!6000000007009-2-tps-126-42.png"
              height={42}
              width={126}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
