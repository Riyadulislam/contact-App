import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { authentication } from '../../../firebase-config';
import { RecaptchaVerifier } from "firebase/auth";
import {signInWithPhoneNumber } from "firebase/auth";

const PersonContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const contact=useLoaderData()
    const {idlist,number,firstName,lastName}=contact
    const genarateRecptcha=()=>{
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
         
        }
      }, authentication);
    }

    const onSubmit = data =>{ 
      console.log(data.phone)
      const phoneNumber=data.phone;
      genarateRecptcha();
      const appVerifier= window.recaptchaVerifier
      signInWithPhoneNumber(authentication,phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult)
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });

        // fetch('http://localhost:5000/mobile', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        //   })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log('Success:', data);
         
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
     }
 
  
  
    return (
        <div className='text-center'>
            
            <div className='w-80 mx-auto'>

<h3 className=" text-center text-lg font-bold"></h3>
<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
{/* <input type="firstName"  placeholder={firstName+lastName}className="input w-full input-bordered"
{...register("firstName")} /> */}
<input type="phone"   placeholder={number}  className="input w-full input-bordered"
{...register("phone")} />

<input type="submit" className=' btn btn-accent w-full mb-10' value="messege sent" />
<div id="recaptcha-container"></div>
</form>
</div>
        </div>
    );
};

export default PersonContact;