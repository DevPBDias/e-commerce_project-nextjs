import Image from 'next/image'
import heroTimer from '../assets/Rectangle 13.png'
import '../css/feedback.css'

const Feedback = ({ data }: any) => {

    return (
        <div className="feedback_content">
            <p>rating stars</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id quia cum voluptas? Autem, ducimus!</p>
            <div className="feedback_info">
                <div className="img_box">
                    <Image src={heroTimer} alt="user photo" />
                </div>
                <div className="txt_box">
                    <p>{`${data.name.firstname} ${data.name.lastname}`}</p>
                    <p className="txt_adress">{data.address.city}</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback