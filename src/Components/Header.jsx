import React from 'react'

const Header = () => {
  return (
      <div className='w-screen h-[5rem] flex justify-between items-center shadow-md'>
          <div className="w-[95%] mx-auto flex items-center justify-between">
              <div className="">
                  <h1 className='text-2xl font-bold'>React redux app</h1>
              </div>
              <div className="">
                  <p>cart: 4 items</p>
              </div>
          </div>
    </div>
  )
}

export default Header