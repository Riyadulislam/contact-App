import React from 'react';
import { useForm } from 'react-hook-form';

const ContactAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5000/contactAdd', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
              .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
             
              })
              .catch((error) => {
                console.error('Error:', error);
              });
     }

    return (
        <div>
<div className='w-80 mx-auto'>

<h3 className=" text-center text-lg font-bold"></h3>
<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
<input type="firstName" placeholder="First Name"className="input w-full input-bordered"
{...register("firstName")} />
<input type="lastName" placeholder="Last Name"className="input w-full input-bordered"
{...register("lastName")} />
<input type="phone" placeholder="phone"  className="input w-full input-bordered"
{...register("number")} />
<input type="submit" className=' btn btn-accent w-full mb-10' value="Submit" />
</form>
</div>
            
        </div>
    );
};

export default ContactAdd;