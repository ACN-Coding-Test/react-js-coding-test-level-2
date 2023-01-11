import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head'
import HomeContainer from 'containers/home'
import AppLayout from 'layout/app.layout'
import { BASE_URL } from 'configs';

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number,
    count: number,
  }
}

interface HomePageProps {
  products: ProductInterface[];
}

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>ACN React Test Level 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <HomeContainer products={products} />
      </AppLayout>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const res = await axios.get<{ data: ProductInterface[] }>(`${BASE_URL}/products`);
  return { products: res.data };
}

export default HomePage;
