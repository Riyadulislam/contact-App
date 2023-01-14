import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const PersonContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
     }
    const contact=useLoaderData()
    const {idlist,number,firstName,lastName}=contact
  
    console.log(contact)
    return (
        <div className='text-center'>
            
            <div className='w-80 mx-auto'>

<h3 className=" text-center text-lg font-bold"></h3>
<form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
<input type="firstName" disabled placeholder={firstName+lastName}className="input w-full input-bordered"
{...register("firstName")} />
<input type="phone" disabled placeholder={number}  className="input w-full input-bordered"
{...register("phone")} />


<input type="submit" className=' btn btn-accent w-full mb-10' value="messege sent" />
</form>
</div>
        </div>
    );
};

export default PersonContact;