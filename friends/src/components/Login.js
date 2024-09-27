import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components'
import React, { useState } from "react";
import { useHistory } from "react-router";

const initialValues = {
    username: '', 
    password: ''
}

const StyledLogin = styled.div`
    color: #7f5539;
    h1 {
        color: #ffe8d6 ;
    }
    label {
        margin: 0 auto;
    }
    form {
        margin-top: 10%;
        color: #ffe8d6
    }
    button {
        color: #7f5539;
        background-color: #ffe8d6;
        display: block;
        margin: 4% auto;
    }
    input {
        margin-right: 5%;
    }
`

const Login = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory()

    const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', formValues)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(<StyledLogin>
        <h1>Login to See Event Attendees</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Username:</label>
                <input id='username'
                name='username' 
                values={formValues.username} 
                onChange={handleChanges}/>
                
            <label htmlFor='password'>Password:</label>
                <input id='password' 
                name='password' 
                type='password'
                values={formValues.password} 
                onChange={handleChanges}/>
            <button>Login</button>
        </form>
    </StyledLogin>)
}

export default Login;