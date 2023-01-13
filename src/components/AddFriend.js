import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {

    const {push} = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', form)
        .then(res => {
            push('/friends')
        })
        .catch (err => {
            console.error(err)
        })
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} id ="name"/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input  onChange={handleChange} id='age'/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} id='email'/>
                </div>
            </form>
            <button>Submit</button>
        </div>
    )
  }

  export default AddFriend;