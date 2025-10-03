import React, { use, useState } from 'react';


const Hero = ({getData, count, setCount, counter, setCounter}) => {
 
    const weGet = use(getData)


   const [solve, setSolve] = useState([])

    const [select, setSelect] = useState([])

    const handleSelect=(card)=>{
        setSelect((view)=> [...view, card])

        const allCount = count+1;
        setCount(allCount)

        alert("You added a task")
    }

    const handleClear=(card)=>{
        setSelect((view)=> {
            const solveCard= view[card];

            setSolve((complete)=> [...complete, solveCard]);
            return view.filter((_, i) => i !==card);
        });

        const minCount= count-1;
        setCount(minCount)

        const plusCount = counter + 1
        setCounter(plusCount)

        alert("Task completed")
    }


    return (
        
    <div className='mt-15 flex flex-col lg:flex-row justify-between gap-15 lg:gap-7'> 
            
            <div className=''>
                <h3 className='text-2xl font-bold text-start text-black'>Customer Tickets</h3>
             <div className='mt-5 grid gap-6 lg:grid-cols-2'>
                 
            {
             
             weGet.map(card=>(
            

                <div onClick={()=>handleSelect(card)} className='p-5 rounded-xl shadow-xl'>
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

             ))
            

            }
                  


              </div>
            </div>

            

        <div>

    
            
           <div className='p-10 shadow'>
            <h2 className='font-bold text-black'>Task Status</h2>

            {
              
              select.length>0? (select.map((card, index)=>(<div className='border p-5 rounded-xl mt-4'>
            <h3 className='text-black font-bold text-[20px]'>{card.title}</h3>
            <button onClick={()=>handleClear(index)} className='py-[7px] px-[70px] bg-green-600 mt-2 text-white font-semibold rounded-[5px]'>Completed</button>
           </div>))): (<p>Select a ticket to add to Task Status</p>)

            }

        
           



            
           </div>



           <div className='p-10 shadow mt-6'>
            <h2 className='font-bold text-black'>Resolved Task</h2>
           

               {/* ---resolved---- */}

            {
                solve.length>0 ? (
                     solve.map((title)=>(<div className='font-semibold bg-[#E0E7FF] py-[10px] px-[20px] text-[17px] rounded-[5px] text-black mt-4'><h3>{title.title}</h3></div>)) 
                ) : ( <p>No resolved tasks yet.</p>)
            }
              
             








             

           </div>
               
        </div>




    </div>



    );
};

export default Hero;
