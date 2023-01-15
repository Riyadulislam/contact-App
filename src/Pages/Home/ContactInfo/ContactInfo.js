import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
const ContactInfo = () => {
    const [contact,setContact]=useState([])
     
    useEffect(()=>{
        fetch('http://localhost:5000/dateinfo')
        .then(res=>res.json())
        .then(data=>setContact(data))
    },[])
   
    return (
        <div className='text-center'>
            <h1 className='font-bold text-2xl'>All contact Information</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th>List</th>
        <th>Number</th>
        <th>Time</th>
        <th>Date</th>
       
      </tr>
    </thead>
    <tbody>
{
    contact.map((contactList,i)=><tr key={i}>
                        <th>{i+1}</th>
                        <td>{contactList.number}</td>
                        <td>{contactList.time}</td>
                         <td>{contactList.date}</td>
                    
        
                       </tr>)
}
   
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default ContactInfo;