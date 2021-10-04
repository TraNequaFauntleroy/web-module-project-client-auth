import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from 'styled-components'


const StyledFriendsList = styled.div `
   flex-direction: column;
    display: flex;
  .list {
    flex-direction: column;
    align-items: center;
  }
  header {
      background-color: #7f5539;
  }
  button {
        color: #7f5539;
        background-color: #ffe8d6;
        display: block;
        margin: 4% auto;
    }

`


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
        <StyledFriendsList>
            <div className='list'>
                <h3>Current Attendees:</h3>
                {
                friends.map(friend =>(
                <p key={friend.id}>{friend.name}</p>))
                }
                <Link to='/friends/add-new'><button>Add Buddy</button></Link>
             </div>
        </StyledFriendsList>
    )
}

export default FriendsList;