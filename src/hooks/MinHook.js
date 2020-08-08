import { useState } from 'react';
import api from '../utils/Api';

export const MinHook = () => {
    

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
    return [formSignUp, setformSignUp, signupUser];

}