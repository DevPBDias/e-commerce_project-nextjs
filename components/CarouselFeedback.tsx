'use client'

import useFetch from "../hooks/useFetch"
import Feedback from "./Feedback"
import '../css/feedback.css'
import { useProductContext } from "../context/ProductsContext"
import { useEffect } from "react"

const CarouselFeedback = () => {
    const { users } = useProductContext()
    
    const selectedUsers = users?.filter((user: any) => user.id < 4)

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