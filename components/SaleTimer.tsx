import Image from "next/image";
import heroTimer from '../assets/Rectangle 13.png'
import '../css/timer.css'

const SaleTimer = () => {
    return (
        <section className="timer_container">
            <div className="timer_content_container">
                <div className="timer_txt_container">
                    <h1>Sales of the month</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque quo quisquam officia, dicta quod ad suscipit, dolore recusandae a obcaecati aperiam alias officiis?</p>
                    <p>timer</p>
                </div>
                <button type="button">produtos</button>
            </div>
            <div className="timer_img_container">
                <Image src={heroTimer} alt='young guys' width={100} height={100} />
            </div>
        </section>
    )
}

export default SaleTimer