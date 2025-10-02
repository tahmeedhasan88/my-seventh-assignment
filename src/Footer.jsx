import React from 'react';

const Footer = () => {
    return (
         <div>
        <div className='bg-black mt-10 p-20 flex justify-between flex-col gap-10 lg:flex-row footer-text'>
            
        <div className='text-white text-start w-[200px]'>
            <h2 className='text-white font-bold'>CS-Ticket System</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className='text-white text-start'>
            <h2 className='font-bold'>Company</h2>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Saled</p>
        </div>

        <div className='text-white text-start'>
            <h2 className='font-bold'>Service</h2>
            <p>Product & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
        </div>

        <div className='text-white text-start'>
            <h2 className='font-bold'>Information</h2>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
        </div>

        <div className='text-white text-start'>
            <h2 className='font-bold'>Social Links</h2>
            <p>@CS-Ticket System</p>
            <p>@CS-Ticket System</p>
            <p>@CS-Ticket System</p>
            <p>support@cst.com</p>
        </div>
        </div>


        <div className='text-white p-5 bg-black border-t-1 border-gray-600 text-[13px]'><p>© 2025 CS- Ticket System. All rights reserved.</p></div>
         </div>    
        
    );
};

export default Footer;