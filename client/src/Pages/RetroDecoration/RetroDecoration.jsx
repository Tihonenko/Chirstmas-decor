import React from 'react';
import { sweets } from '../../img';
import { retroDecor } from '../../constans';

const RetroDecoration = () => {
  return (
    <div className='container min-h-full flex-auto'>

      <h2 className='text-center text-lg font-medium'>About Retro Decoration</h2>
        
          <div className=' overflow-hidden'>
            {retroDecor.map((obj, idx) => (
                <div key={idx} className='block'>
                    <div  className='flex bg-lightred gap-5 justify-between p-5 mt-5'>
                        <img src={obj.img} alt="about" className='w-1/2 object-cover' />
                    <div className='w-1/2 text-lightwhite'>
                        <span className='block text-start text-logo font-medium pb-2'>{obj.title}</span>
                        <p className='block text-justify leading-6'>{obj.body}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
    </div>
  )
}

export default RetroDecoration