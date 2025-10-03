import React from 'react';


const Banner = ({count, setCount, counter}) => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 justify-center mt-10 lg:mt-20'>


            <div className="relative px-40 py-15 bg-gradient-to-r from-[#632EE3]/90 to-[#9F62F2]/80 rounded-2xl">

            <div className="absolute inset-0 bg-[url('/vector1.png')] bg-cover bg-center size-50"></div>

            <div className="absolute bg-[url('/vector1.png')] scale-x-[-1] bg-cover size-50 bg-center inset-y-0 right-0 "></div>

                <h4 className='text-white'>In Progress</h4>
              <h3 className='text-5xl text-white'>{count}</h3>
            </div>


            <div className="relative px-40 py-15 bg-gradient-to-r from-[rgba(84,207,103,1)] to-[rgba(0,130,122,1)] rounded-2xl">

            <div className="absolute inset-0 bg-[url('/vector1.png')] bg-cover bg-center size-50"></div>

            <div className="absolute bg-[url('/vector1.png')] scale-x-[-1] bg-cover size-50 bg-center inset-y-0 right-0"></div>

                <h4 className='text-white'>Resolved</h4>
              <h3 className='text-5xl text-white'>{counter}</h3>
            </div>




        </div>
    );
};

export default Banner;