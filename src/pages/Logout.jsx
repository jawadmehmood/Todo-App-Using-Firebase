import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
   const navigate = useNavigate() 
    signOut(auth).then(() => {
        navigate('/login')
    }).catch((error) => {
        // An error happened.
    });
    return (
        <div>Logout</div>
    )
}

export default Logout