import Head from 'next/head'
import AppLayout from 'layout/app.layout'
import ProductsContainer from 'containers/products'
import { ProductInterface } from 'pages'
import { BASE_URL } from 'configs'
import axios from 'axios'

interface ProductsPageProps {
  products: ProductInterface[]
  categories: string[]
}

const ProductsPage = ({ products, categories }: ProductsPageProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>ACN React Test Level 2</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <ProductsContainer products={products} categories={categories} />
      </AppLayout>
    </div>
  )
}

ProductsPage.getInitialProps = async () => {
  const res = await axios.get<{ data: ProductInterface[] }>(
    `${BASE_URL}/products`
  )
  const categoryRes = await axios.get<{ data: string[] }>(
    `${BASE_URL}/products/categories`
  )
  return { products: res.data, categories: categoryRes.data }
}

export default ProductsPage
