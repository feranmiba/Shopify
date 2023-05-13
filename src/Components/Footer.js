import React from 'react'
import IG from './images/instagram.png'
import FB from './images/facebook.png'
import LIN from './images/linkedin.png'
import PIN from './images/pinterest.png'
import TWIT from './images/twitter.png'

function Footer() {
  return (
   <footer>
    <section className='lin'>
    <div class='flex-wrap gap-20 text-base sm:flex-nowrap flex text-white sm:text-lg text-start sm:gap-10 pb-5'>
        <p><button>About</button></p>
        <p><button>Careers</button></p>
        <p><button>Press and Media</button></p>
        <p><button>Shopify Plus</button></p>
        <p><button>Sitemap</button></p>
    </div>
    </section>
    <section class='sho'>
    <section class='w-full pt-8 md:p-14'>
        <div class='flex-wrap gap-7 xl:flex-nowrap flex xl:gap-36'>
            <div class='gap-9 flex-wrap sm:flex-nowrap flex sm:gap-10 xl:gap-20'>
                <section>
                <h1 class='uppercase text-lg sm:text-xl text-white'>online store</h1>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Sell Online</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Features</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Examples</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Website builder</button></p>
                </section>
                <section>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Ecommerce website</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Domain names</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Themes</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Shopping cart</button></p>
                </section>
                <section>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Mobile commerce</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Ecommerce Software</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Online store builder</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Dropshipping Business</button></p>
                </section>
            </div>


            <div>
                <h1 class='uppercase text-lg sm:text-xl text-white'>point of sale</h1>
                <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Point of sale</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Features</button></p>
          
            </div>

            <div>
                <h1 class='uppercase text-lg sm:text-xl text-white'>support</h1>
                <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>24/7 support</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Shopify Help Center</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Shopify Community</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>API documentation</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Free tools</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Free stock photos</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Websites for sale</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Logo Maker</button></p>
            </div>

            <div>
                <h1 class='uppercase text-lg sm:text-xl text-white'>SHOPIFY</h1>
                <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Contact</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Partner program</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Affiliate program</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>App developers</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Investors</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Blog topics</button></p>
            <p class='text-gray-300 pt-4 text-sm'><button class='hover:text-white'>Community Events</button></p>
            </div>
        </div>
    </section>
    </section>
    <section class='p-8 fl'>
        <div class='flex gap-4'>
            <img src={IG} alt="" class='w-10'/>
            <img src={FB} alt="" class='w-10'/>
            <img src={TWIT} alt="" class='w-10'/>
            <img src={LIN} alt="" class='w-10'/>
            <img src={PIN} alt="" class='w-10'/>
        </div>
    </section>
   </footer>
  )
}

export default Footer