import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Contactlist = () => {
    const [contact,setContact]=useState([])
    
    useEffect(()=>{
            fetch('https://contact-web-pi.vercel.app/contactList')
            .then(res=>res.json())
            .then(data=>setContact(data))
        },[])
       


    return (
      <div>{
        contact.length==0 ?
        <div className="flex justify-center items-center mb-10">
  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span className="visually-hidden"></span>
  </div>
</div>
:<div className="overflow-x-auto">
       
<table className="table w-full">

  <thead>
    <tr>
      <th>List</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Number</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
{
  contact.map((contactList,i)=><tr key={i}>
                      <th>{i+1}</th>
                      <td>{contactList.firstName}</td>
                       <td>{contactList.lastName}</td>
                       <td>{contactList.number}</td>
                      <td><Link to={`/personcontact/${contactList._id}`}><button className="btn btn-sm">Contact Detail</button></Link></td>
                     </tr>)
}
 
   
  </tbody>
</table>
</div>
  

        }
        
         </div>
  
    );
};

export default Contactlist;