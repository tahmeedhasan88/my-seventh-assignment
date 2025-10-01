import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = ({card}) => {
    
    return (
        <div>
            

      <div className='p-5 rounded-xl shadow-xl'>
                   <div className='flex items-center justify-between lg:px-6'>
                    <h3 className='text-xl font-bold'>{card.title}</h3>
                    <div className='border-1 px-3 rounded-2xl'><h3>{card.status}</h3></div>
                   </div>
                    <p>{card.description}</p>

                    <div className='flex justify-between items-center mt-1 lg:px-5'>
                        <div className='flex gap-5'>
                            <p>#{card.id}</p>
                            <p className='font-semibold'>{card.priority}</p>
                        </div>

                        <div className='flex gap-5'>
                            <p className='font-semibold'>{card.customer}</p>
                            <p>{card.createdAt}</p>
                        </div>
                    </div>




                  </div>





        </div>
    );
};

export default Card;