import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/AxiosWithAuth";


const FriendsList = (props) => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log({err: err})
            })
    }, [])

    return (
        <div>
        {/* <Link to='/friends/'>See Buddies</Link> */}
            <h3>Current Buddies:</h3>
            {
            friends.map(friend =>(
            <p key={friend.id}>Name: {friend.name}, Age:{friend.age}, Email:{friend.email}</p>))
            }
             <Link to='/friends/add-new'>Add Buddy</Link>
        </div>
    )
}

export default FriendsList;