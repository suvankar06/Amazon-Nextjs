import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title>Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in</title>
      </Head>

     <Header />
     <main className='max-w-screen-2xl mx-auto'>
<Banner />
<ProductFeed products={products}/>
     </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
  (res) => res.json()
  );
  return {
    props: {
      products
    }
  }
}