import Image from "next/image"

const data = [
    { image: "/images/lazmall.png", name: "LazMall" },
    { image: "/images/free.png", name: "Free Shipping" },
    { image: "/images/rm9.png", name: "RM9.90 All In" },
    { image: "/images/topup.png", name: "Top UP & eStore" },
    { image: "/images/vouche.png", name: "Voucher" },
]

export default function Options() {
    return <div className="flex mt-3">
        {data.map(item => (
            <div className="card flex pr-4 mr-3 w-1/4 items-center h-10">
                <Image src={item.image} width={32} height={32} alt={item.name} className="m-0.5" />
                <span className="ml-1 text-lg text-black">{item.name}</span>
            </div>
        ))}
    </div>
}