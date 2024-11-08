'use client';
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([])  // All list info can store here
 
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask,{ title,desc }]);
    
    setTitle("");
    setDesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }
  let renderTask = <h2> No Task Available</h2>
  if ( mainTask.length >0 ) {
    
  renderTask = mainTask.map((t,i) => {
    return (
    <li key={i} className='flex items-center justify-between mb-5'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-xl font-medium '>{t.title}</h5>
      <h6 className='text-2xl font-medium'>{t.desc}</h6>
      </div>
      <li>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-600 text-white px-4 py-4 rounded font-bold'> Delete</button>
      </li>
    </li>
    );
  })
  }
    
  return (
    <>
      <h1 className='bg-black text-white p-5 font-bold text-center text-2xl'>
        TODO List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl border-zinc-900 border-4 m-8 px-4 py-4'
          placeholder='Enter Your task Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className='text-2xl border-zinc-900 border-4 m-8 px-4 py-4'
          placeholder='Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          type="submit"
          className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'
        >
          Add Task
        </button>
      </form>

      <hr />
      <div className='p-5 bg-slate-800  '>  
        <ul className='text-white'>
          {renderTask}
        </ul>
      </div>


    </>
  );
};

export default Page;
