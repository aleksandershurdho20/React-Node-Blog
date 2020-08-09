import { useState } from 'react';
import api from '../utils/Api';
import Swal from 'sweetalert2'
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
            if(res.data.status==="success"){
                Swal.fire(
                    'Account Created Succesfully',
                    'You may Login Now',
                    'success'
                  )
                setformSignUp({
                    email:'',
                    password:''
                })
            }
          
        }
        catch(err){
            console.log(err)

        }
    }
    return [formSignUp, setformSignUp, signupUser];

}