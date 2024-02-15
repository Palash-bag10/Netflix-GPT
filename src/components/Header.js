import React from 'react'

const Header = () => {
  return (
    <div className='absolute z-10 flex w-full flex-row items-center justify-between bg-gradient-to-b from-black px-3'>
      <img
       className="cursor-pointer w-56"
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo" />
    </div>
  )
}

export default Header
