import React from 'react'
import Pics from './images/help.jpg'

function Help() {
  return (
    <div>
        <div class='flex-wrap xl:flex-nowrap  flex justify-between sm:p-20'>
        <section class='text-start p-14'>
            <div>
                <h1 class='text-4xl pb-14'>Get the help you need,<br/> every step of the way</h1>
            </div>
            <summary class='flex-wrap sm:flex-nowrap flex justify-between gap-5 '>
                <div>
                <h1 class='text-lg font-semibold pb-3'>Shopify support</h1>
                    <p class='text-base'>Contact support 24/7, whether you’re troubleshooting issues or looking for business advice.</p>
                    <p><button class='pt-4 font-semibold'>Contact support</button></p>
                </div>
                <div>
                    <h1 class='text-xl font-semibold pb-3'>Shopify App Store</h1>
                    <p class='text-lg'>Add features and functionality to your business with 6,000+ apps that integrate directly with Shopify.</p>
                    <p><button class='pt-4 font-semibold'>Visit the Shopify App Store</button></p>
                </div>
            </summary>
            <div class='pt-5 sm:p-20'>
            <h1 class='text-xl font-semibold pb-3'>Shopify Experts Marketplace</h1>
                    <p class='text-lg'>Hire a Shopify expert to help you with<br /> everything from store setup to SEO.</p>
                    <p><button class='pt-4 font-semibold'>Explore the Shopify Experts Marketplace</button></p>
                </div>
        </section>
        <section class='sm:w-full xl:w-1/2'>
            <img src={Pics} alt="" />
        </section>
        </div>


















    </div>
  )
}

export default Help