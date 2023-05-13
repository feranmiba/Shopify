import React from 'react'
import pic from './images/pic-1.webp'
import pics from './images/pic-2.webp'
import pict from './images/pic-3.webp'
import picf from './images/pic-4.webp'



function Body() {
  return (
   <section className='body'>
    <div class='flex justify-items-start ml-4 p-10 md:p-15'>
        <div>
        <h1 class=' text-2xl flex md:justify-items-start md:text-4xl  '>Bring your business online</h1>
        <p class='text-sm md:text-lg md:w-7/12 mt-3'>Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
        <p class='text-sm md:text-lg flex justify-items-start mt-3'><b>Explore more examples</b></p>
        </div>
    </div>

    <section class='ml-32 md:ml-0 flex-wrap justify-center md:flex-nowrap flex md:justify-between sm:p-10 md:p-20'>
    <div class='p-2 md:p-0'>
    <img src={pic} alt="" class='w-1/2 md:w-full '/>
    <h1  class='-ml-32 md:ml-0'><b>FOOD & DRINK</b></h1>
    <p  class='-ml-32 md:ml-0'>Blue Tokai</p>
    </div>
    <div  class='p-2 md:p-0'>
    <img src={pics} alt="" class='w-1/2 md:w-full' />
    <h1  class='-ml-32 md:ml-0'><b>JEWELRY</b></h1>
    <p  class='-ml-32 md:ml-0'>Quirksmith</p>
    </div>
    <div  class='p-2 md:p-0'>
    <img src={pict} alt="" class='w-1/2 md:w-full'/>
    <h1  class='-ml-32 md:ml-0'><b>ELECTRONICS</b></h1>
    <p  class='-ml-32 md:ml-0'>Crossbeats</p>
    </div>
    <div  class='p-2 md:p-0'>
    <img src={picf} alt="" class='w-1/2 md:w-full'/>
    <h1  class='-ml-32 md:ml-0'><b>BEAUTY</b></h1>
    <p  class='-ml-32 md:ml-0'>Mcaffeine</p>
    </div>
    </section>

    <summary class='p-16'>
        <h1 class='flex justify-start pb-8 text-3xl font-normal'>Take the best path forward</h1>
        <section class='flex-wrap md:flex-nowrap flex justify-between gap-5'>
            <div class='text-start'>
                <h1 class='pb-4 text-lg font-medium'>Start an online business</h1>
                <p class='text-sm'>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money</p>
            </div>
            <div class='text-start'>
                <h1 class='pb-4 text-lg font-medium'>Move your business online</h1>
                <p class='text-sm'>Turn your retail store into an online store and keep serving customers without missing a beat.</p>
            </div>
            <div class='text-start'>
                <h1 class='pb-4 text-lg font-medium'>Start an online business</h1>
                <p class='text-sm'>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money</p>
            </div>
            <div class='text-start'>
                <h1 class='pb-4 text-lg font-medium'>Hire a Shopify expert</h1>
                <p class='text-sm'>Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.</p>
            </div>
        </section>
    </summary>







   </section>
  )
}

export default Body