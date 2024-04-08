import Image from 'next/image'
import heroTimer from '../assets/Rectangle 13.png'

const Feedback = ({ data }: any) => {

    return (
        <div>
            <p>rating stars</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id quia cum voluptas? Autem, ducimus!</p>
            <div>
                <div>
                    <Image src={heroTimer} alt="user photo" width={30} height={30} />
                </div>
                <div>
                    <p>{`${data.name.firstname} ${data.name.lastname}`}</p>
                    <p>{data.address.city}</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback