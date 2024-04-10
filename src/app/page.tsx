'use client'
import Card from "../../components/Card";
import CarouselFeedback from "../../components/CarouselFeedback";
import Hero from "../../components/Hero";
import SaleTimer from "../../components/SaleTimer";
import '../../css/productCard.css'
import { useProductContext } from "../../context/ProductsContext";

export default function Home() {
  const { products } = useProductContext()

  const onSaleProducts = products?.filter((product: any) => product.price > 120)

  return (
    <main>
      <Hero />
      <section className="cards_container">
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
