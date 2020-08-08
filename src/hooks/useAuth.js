import { useState } from 'react';
import api from '../utils/Api';
import { useHistory } from "react-router-dom";

export const useAuth = () => {
    let history = useHistory();

    const [formSignUp, setformSignUp]=useState({
    email:'',
    password:''
    })


    const signupUser = async (email,password) => {
        try{
            const config = {headers :{"Content-Type":"application/json"}}
            const body = {email,password};
            const res  = await api.post('/api/signup',body,config);
            console.log('Data from Api ',res)

        }
        catch(err){
            console.log(err)

        }
    }

    const loginUser = async (email, password) => {
        try{
            const config = {headers :{"Content-Type":"application/json"}}
            const body = {email,password};
            const res  = await api.post('/api/login',body,config);
            console.log('Data from Api ',res)
            if(res.data.status==="success") {
                localStorage.setItem('token',res.data.token)
                history.push('/home')
            }
        }
        catch(err){
            console.log(err)
      
        }
      }

    return [formSignUp, setformSignUp, loginUser,  signupUser];
}