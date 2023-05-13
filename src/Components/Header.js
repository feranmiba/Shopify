import React from 'react'
import Logo from './images/logo.png'
import Main from './Main'

function Header() {
  return (
    <div className='head'>
        <header class='xl:px-20 flex justify-between py-3 items-center'>
            <div><img class='w-24 xl:w-36' src={Logo} alt="" /></div>
            <div class='justify-between'>
                <div>
                    <ul class='hidden xl:flex gap-10'>
                        <li class='text-xl font-semibold  '>Start</li>
                        <li class='text-xl font-semibold  '>Sell</li>
                        <li class='text-xl font-semibold  '>Market</li>
                        <li class='text-xl font-semibold  '>Manage</li>
                    </ul>
                </div>
            </div>
            <div>
                    <ul class='gap-2 flex xl:gap-10'>
                        <li class='text-base  xl:text-xl font-semibold  '>Pricing</li>
                        <li class='text-base  xl:text-xl font-semibold  '>Learn </li>
                        <li class='text-base  xl:text-xl font-semibold  '>Log in</li>
                      <button class=' text-white text-base rounded-lg p-2  xl:p-3 bg-green-800 shadow-2xl transition hover:bg-green-900'>Try for free</button>
                    </ul>
                </div>
        </header>
        <Main />
    </div>
  )
}

export default Header