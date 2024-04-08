import Image from "next/image";
import hero from '../assets/mike-petrucci-c9FQyqIECds-unsplash.jpg'

const Hero = () => {
    return (
        <section>
            <div>
                <Image src={hero} alt="Open shop img" width={900} />
            </div>
            <div>
                <h3>Conheça os tops produtos da nossa loja</h3>
                <h1>Ecommerce store</h1>
                <h3>eletronicos / games / moveis</h3>
                <button>Shop now</button>
            </div>
        </section>
    )
}

export default Hero