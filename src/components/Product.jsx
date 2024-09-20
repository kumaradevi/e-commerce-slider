
import React from 'react'


function Product(props) {




  return (
    <div className='w-[300px] h-[360px] flex flex-col justify-between items-center p-6 m-8  text-white text-center '>
        <div className='bg-indigo-400 p-2'>
         <div >
            <img src={props.image} alt="no-image" className='w-[340px] h-[200px]'/>
        </div>
        <div className='mt-6 mb-2 '>
            <h1 className='font-medium text-xl '>{props.name}</h1>
            <p className='font-bold '>{props.price}</p>
            <p>{props.description}</p>
        </div>
    </div>
    </div>
  )
}

export default Product