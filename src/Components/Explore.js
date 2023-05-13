import React from 'react'
import Help from './Help'
import Last from './Last'
import Person from './images/use.jpg'

function Explore() {
  return (
    <div>
      <section className='roller'>
        <h1 class='text-3xl md:text-4xl text-start p-3' >Explore more from Shopify </h1>


        <section class='p-2 md:p-32'>
        <div class='flex-wrap xl:flex-nowrap flex   bg-white justify-between gap-10 p-3'>
      <div class='text-start'>
      <p class='pb-8 pt-3'><button class='uppercase text-lg font-semibold'>start</button></p>
        <h1 class='text-2xl md:text-3xl pt-3'>Launch your store with the help of a Shopify Expert</h1>
        <p class='pt-7 text-base md:text-lg'>Find hundreds of experts ready to help you get your store up and running, from choosing a theme to building a fully customized site.</p>
        <button  class='pt-7 text-lg font-semibold'>Browse Experts</button>
        </div>
        <div class='xl:w-1/2 '>
          <img src={Person} alt=""  />
        </div>
      </div>
        </section>
      </section>
      <Help />
      <Last />
      </div>
  )
}

export default Explore