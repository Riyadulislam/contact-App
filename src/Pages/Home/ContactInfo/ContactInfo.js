import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
const ContactInfo = () => {
    const [contact,setContact]=useState([])
     
    useEffect(()=>{
        fetch('https://contact-web-pi.vercel.app/dateinfo')
        .then(res=>res.json())
        .then(data=>setContact(data))
    },[])
   
    return (
        <div>
            {
                contact.length==0 ?
                <div className="flex justify-center items-center mb-10">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full " role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
              :
              <div className='text-center'>
            <h1 className='font-bold text-2xl'>All contact Information</h1>
            <div className="overflow-x-auto mt-5">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th>List</th>
        <th>Name</th>
        <th>Time</th>
        <th>Date</th>
       
      </tr>
    </thead>
    <tbody>
{
    contact.map((contactList,i)=><tr key={i}>
                        <th>{i+1}</th>
                        <td>{contactList.name}</td>
                        <td>{contactList.time}</td>
                         <td>{contactList.date}</td>
                    
        
                       </tr>)
}
   
     
    </tbody>
  </table>
</div>
            
        </div>
    
              
            }
    </div>
        
    );
};

export default ContactInfo;