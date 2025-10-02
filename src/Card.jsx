import React from 'react';
const Card = ({card}) => {
    
    return (
        <div>
            

      <div className='p-5 rounded-xl shadow-xl'>
                   <div className='flex items-center justify-between lg:px-6'>
                    <h3 className='text-xl font-bold text-black'>{card.title}</h3>
                    <div className={`px-3 rounded-2xl ${card.status === "Open" ? "text-green-800 bg-green-200 " : ""}
        ${card.status === "Pending" ? "text-yellow-600 bg-yellow-200" : ""}
        ${card.status === "Resolved" ? "text-red-600 bg-red-200" : ""} ${card.status === "In Progress" ? "text-orange-500 bg-orange-200" : ""}`}><h3 className='font-bold'>{card.status}</h3></div>
                   </div>
                    <p className='text-black'>{card.description}</p>

                    <div className='flex justify-between items-center mt-1 lg:px-5'>
                        <div className='flex gap-5'>
                            <p className='text-black'>#{card.id}</p>
                            <p className={`font-semibold ${card.priority === "High"?"text-red-500":""} ${card.priority === "Medium"?"text-yellow-500":""} ${card.priority === "Low"?"text-green-500":""}`}>{card.priority}</p>
                        </div>

                        <div className='flex gap-5'>
                            <p className='font-semibold text-black'>{card.customer}</p>
                            <p className='text-black'>{card.createdAt}</p>
                        </div>
                    </div>
                  </div>





        </div>
    );
};

export default Card;