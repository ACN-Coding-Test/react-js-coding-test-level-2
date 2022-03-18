export type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: object
}
  
export type Cart = {
    productId: number
    quantity: number
}