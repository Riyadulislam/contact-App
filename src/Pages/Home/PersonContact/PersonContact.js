import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { authentication } from '../../../firebase-config';
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const PersonContact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const contact = useLoaderData()
  const { idlist, number, firstName, lastName } = contact
  const today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const genarateRecptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
      }
    }, authentication);
  }

  const onSubmit = data => {
    console.log(date)
    const phoneNumber = data.phone;
    genarateRecptcha();
    const appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        const userInfo = {
          name: firstName + lastName,
          number: phoneNumber,
          date,
          time
        }
        console.log(userInfo)
        saveNumberAndDate(userInfo);

        window.confirmationResult = confirmationResult;
        console.log(confirmationResult)


      }).catch((error) => {

        console.log(error)
      });


  }
  const saveNumberAndDate = (body) => {
    fetch('https://contact-web-pi.vercel.app/mobile', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged === true) {

          toast("OTP send Successfully");


        }
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }




  return (
    <div className='text-center'>

      <div className='w-80 mx-auto'>

        <h3 className=" text-center text-lg font-bold"></h3>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
        
          <input type="phone" required="required" placeholder={number} className="input w-full input-bordered"
            {...register("phone")} />

          <input type="submit" className=' btn btn-accent w-full mb-10' value="messege sent" />
          <div id="recaptcha-container"></div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default PersonContact;