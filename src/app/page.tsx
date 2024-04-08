'use client'
import Card from "../../components/Card";
import CarouselFeedback from "../../components/CarouselFeedback";
import Hero from "../../components/Hero";
import SaleTimer from "../../components/SaleTimer";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const products = useFetch('https://fakestoreapi.com/products')

  const onSaleProducts = products.data?.filter((product: any) => product.price > 120)

  return (
    <main>
      <Hero />
      <section>
        {
          onSaleProducts !== null && onSaleProducts?.map((product: any) => (
            <Card key={product.id} data={product} />
          ))
        }
      </section>
      <SaleTimer />
      <CarouselFeedback />
    </main>
  );
}
