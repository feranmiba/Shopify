import React from 'react'
import Explore from './Explore'
import pics from './images/pic-6.webp'
import picse from './images/pic-7.png'
import vid from './images/sec2-video.webm'

function With() {
  return (
    <div>
        <section>
            <div class='pt-20  text-center'>
            <h1 class='text-3xl font-light pb-3'>With you wherever you’re going</h1>
            <p class='text-center text-base'>One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.</p>
            </div>
            <summary class='p-10 md:p-20 lg:p-52'>
            <section class='flex-wrap md:flex-nowrap flex justify-between'>
                <div><video src={vid}  class='h-5/6 w-5/6'></video></div>
                <span class='text-start'> <h1 class='text-2xl md:text-4xl pb-6'>Sell everywhere</h1><p class='text-lg md:text-xl leading-10'>Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online marketplaces.</p> <button class='pt-6 text-black-500 text-base md:text-xl font-bold'>Explore ways to sell</button></span>
            </section>
            <section class='flex-wrap md:flex-nowrap flex justify-between ml-10 pt-5 '>
                <span class='text-start'> <h1 class='text-2xl md:text-4xl pb-6'>Market your business</h1><p class='text-lg md:text-xl leading-10'>Take the guesswork out of marketing with built-in tools that help you create, execute, and analyze digital marketing campaigns.</p> <button class='pt-6 text-black-500 text-base md:text-xl font-bold'>Explore how to market your business</button></span>
                <div><img src={pics} alt='' class='h-5/6 w-5/6'/></div>
            </section>
            <section class='flex-wrap md:flex-nowrap flex justify-between pt-5'>
                <div><img src={picse} alt='' class='h-5/6 w-5/6'/></div>
                <span class='text-start'> <h1 class='text-2xl md:text-4xl pb-6'>Manage everything</h1><p class='text-lg md:text-xl leading-10'>Gain the insights you need to grow—use a single dashboard to manage orders, shipping, and payments anywhere you go.</p> <button class='pt-6 text-black-500 text-base md:text-xl font-bold'>Explore how to manage your business</button></span>
            </section>
            </summary>
            
        </section >
        <Explore />
    </div>
  )
}

export default With