import Image from 'next/image'
import heroImg from '../assets/heroImg.jpg'
import '../css/hero.css'

const Hero = () => {
    return (
        <section className="hero_container">
            <div className="img_container">
                <Image src={heroImg} alt="Open shop img" />
            </div>
            <div className="txt_container">
                <h3>Conheça os tops produtos da nossa loja</h3>
                <h1>Ecommerce store</h1>
                <h3>eletronicos / games / moveis</h3>
                <button>Shop now</button>
            </div>
        </section>
    )
}

export default Hero