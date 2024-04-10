'use client'

import useFetch from "../hooks/useFetch"
import Feedback from "./Feedback"
import '../css/feedback.css'

const CarouselFeedback = () => {
    const { data } = useFetch('https://fakestoreapi.com/users')

    const selectedUsers = data?.filter((user: any) => user.id < 4)

    return (
        <div className="feedback_container">
            <h1>Feedbacks</h1>
            <div className="feedbacks_container">
                {
                    selectedUsers && selectedUsers?.map((user: any) => (
                        <Feedback key={user.id} data={user} />
                    ))
                }
            </div>
        </div>
    )
}

export default CarouselFeedback