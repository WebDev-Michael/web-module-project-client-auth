import React, {useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const Logout = () => {

    const {push} = useHistory()
    useEffect(() => {
        axiosWithAuth().post('/logout')
        .then(res => {
            localStorage.removeItem('token');
            push('/login');
    })
        .catch(err => {
            console.error(err)
        })
    })
    return(
        <div>

        </div>
    )
}

export default Logout;