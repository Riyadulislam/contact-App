import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import ListOfContact from '../ListOfContact/ListOfContact';

const Home = () => {
    return (
        <div className='flex justify-evenly'>
            <ListOfContact></ListOfContact>
            <ContactInfo></ContactInfo>
            
        </div>
    );
};

export default Home;