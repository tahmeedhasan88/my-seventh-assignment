import React, { use } from 'react';
import Card from './Card';

const Hero = ({getData}) => {

    const weGet=use(getData)
    console.log(weGet)
    return (
        <div className='mt-15'>
            
            <div className=''>
                <h3 className='text-2xl font-bold'>Customer Tickets</h3>
             <div className='mt-5 grid gap-6 lg:grid-cols-2'>
                 
            {
             
             weGet.map(card=><Card card={card}></Card>)


            }
                  


              </div>
            </div>

            
            <div>
                
            </div>


        </div>
    );
};

export default Hero;
