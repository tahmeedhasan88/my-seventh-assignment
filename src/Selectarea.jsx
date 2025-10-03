import React from 'react';

const Selectarea = () => {
    return (
        <div className='p-10 shadow'>
            <h2 className='font-bold text-black'>Task Status</h2>

           {/* ---------Notification------- */}
           <div className='border p-5 rounded-xl mt-4'>
            <h3 className='text-black font-bold text-[20px]'>Log In</h3>
            <button className='py-[7px] px-[70px] bg-green-600 mt-2 text-white font-semibold rounded-[5px]'>Completed</button>
           </div>



            <p>Select a ticket to add to Task Status</p>
           </div>
    );
};

export default Selectarea;