import React from 'react'
import Vid from './images/hero-video.webm'
import Body from './Body'
import With from './With'
import './all.css'

function Main() {
  return (
    <div>
        <div className='first' class='justify-center flex-wrap xl:flex-nowrap flex xl:justify-between items-center p-8'>
            <div class='xl:w-1/2'>
                <video src={Vid} ></video>
            </div>

            <div className='mod'>
               
                <h1 class='p-3 text-2xl md:text-3xl font-bold uppercase '>The easiest way to sell online</h1>
                <div className='text'>
                <p class='text-xl p-3'>
                Try one of the most powerful platforms on the market for free. No technical knowledge needed.
                </p>
                </div>
                <section className='in'>
                  <div class='p-3'>
                  <input type="email" placeholder='Enter Your Email'  class='w-full border p-3 pr-3 md:w-1/2 md:pr-32 shadow-2xl'/> <button class='w-full mt-3 md:mt-0 text-base md:w-1/4 text-white p-3 bg-green-800 rounded-md shadow-2xl'>Try for Free</button>
                  </div>
                </section>
                <p class= 'text-center mt-3'>Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>

            </div>
        </div>
        <Body />
        <With />
    </div>
  )
}

export default Main