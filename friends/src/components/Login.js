import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const initialValues = {
    username: '', 
    password: ''
}

const Login = () => {

    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory()


    const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', formValues)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
        
    }


    return(
        <form onSubmit={onSubmit}>
            <label htmlFor='username'>Username</label>
                <input id='username'
                name='username' 
                values={formValues.username} 
                onChange={handleChanges}/>
                
            <label htmlFor='password'>Password</label>
                <input id='password' 
                name='password' 
                type='password'
                values={formValues.password} 
                onChange={handleChanges}/>
            <button>Login</button>
        </form>
    )
}

export default Login;