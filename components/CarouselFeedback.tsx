'use client'

import useFetch from "../hooks/useFetch"
import Feedback from "./Feedback"

const CarouselFeedback = () => {
    const { data } = useFetch('https://fakestoreapi.com/users')

    const selectedUsers = data?.filter((user: any) => user.id < 4)

    console.log(selectedUsers);
    

        return(
            <div>
                <h1>Feedbacks</h1>
                {
                    selectedUsers && selectedUsers?.map((user: any) => (
                        <Feedback key={user.id} data={user} />
                    ))
                }
            </div>
        )
}

export default CarouselFeedback