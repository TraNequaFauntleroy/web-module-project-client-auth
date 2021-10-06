import React from "react";
import { useHistory } from "react-router";
import axiosWithAuth  from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledForm = styled.div`
label {
    display: block;
    margin-bottom: 2%;
}
button {
    display: block;
    margin: 0 auto;
    color: #7f5539;
    background-color: #ffe8d6;
    display: block;
    margin: 4% auto;
}`

const initialValues = {
    name: '',
    age: '',
    email: ''
}

const AddFriendForm = () => {
    const { push } = useHistory()
    const [formValues, setFormValues] = React.useState(initialValues);

    const handleChanges = (e) => {
       setFormValues({
           ...formValues,
           [e.target.name]: e.target.value
       }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', formValues)
            .then(res => {
                push('/friends')
            })
            .catch(err => {
                console.log({err: err})
            })
    }

    return (<StyledForm>
        <h3>Add New Attendee</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
                <input
                id='name'
                name='name'
                value={formValues.name}
                onChange={handleChanges} />

            <label htmlFor='age'>Age:</label>
                <input
                id='age'
                name='age'
                value={formValues.age}
                onChange={handleChanges} />

            <label htmlFor='email'>Email:</label>
                <input
                id='email'
                name='email'
                value={formValues.email}
                onChange={handleChanges} />
            <button>Add Attendee</button>
        </form>
    </StyledForm>)
}

export default AddFriendForm;

