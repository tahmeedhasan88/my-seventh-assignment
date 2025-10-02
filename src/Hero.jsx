import React, { use } from 'react';
import Card from './Card';

const Hero = ({getData}) => {

    const weGet = use(getData)
    return (
        
    <div className='mt-15 flex flex-col lg:flex-row justify-between gap-15 lg:gap-7'> 
            
            <div className=''>
                <h3 className='text-2xl font-bold text-start text-black'>Customer Tickets</h3>
             <div className='mt-5 grid gap-6 lg:grid-cols-2'>
                 
            {
             
             weGet.map(card=><Card card={card}></Card>)


            }
                  


              </div>
            </div>

            

        <div>

           <div className='p-10 shadow'>
            <h2 className='font-bold text-black'>Task Status</h2>
            <p>Select a ticket to add to Task Status</p>
           </div>


           <div className='p-10 shadow mt-6'>
            <h2 className='font-bold text-black'>Resolved Task</h2>
            <p>No resolved tasks yet.</p>
           </div>
               
        </div>




    </div>



    );
};

export default Hero;
