import React from 'react'

function Nav() {
  return (
    <div className='navbar absolute top-0 left-0 z-[10] w-full py-6 px-6'>
         <div className="logo flex gap-7">
            <div className="lines flex flex-col gap-[5px]">
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
            </div>
            <h3 className="text-4xl -mt-[8px] leading-none text-white">
                Rockstar
            </h3>
            </div>
    </div>
  )
}

export default Nav