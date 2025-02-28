import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-white px-[5%] w-full py-[20px] sm:py-[50px]  font-funnel'>
        <div className=''>
            <p className='font-medium text-[20px] md:text-[24px] text-center'>Subscribe to our Newsletter</p>        
            <form role="subscribe" method="get" action="" className='mt-[1em]'>
                <div className="flex border-[2px] border-indigo-700 w-fit mx-auto rounded-[40px] overflow-hidden ">
                    <input type="search" className="w-[50vw] sm:w-[300px] px-[10px] sm:px-[30px] text-[14px] sm:text-[20px] py-[5px] text-primary" placeholder="Your email address" />
                        <button type="submit" className="bg-indigo-700  px-[15px]" name="submit">
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L5.34315 0.928932C4.95262 0.538408 4.31946 0.538408 3.92893 0.928932C3.53841 1.31946 3.53841 1.95262 3.92893 2.34315L9.58579 8L3.92893 13.6569C3.53841 14.0474 3.53841 14.6805 3.92893 15.0711C4.31946 15.4616 4.95262 15.4616 5.34315 15.0711L11.7071 8.70711ZM0 9L11 9V7L0 7L0 9Z" fill="white"/></svg>

                        </button>
                 </div>
            </form>
        </div>
        <div className='sm:flex justify-between mt-[3em]'>
            <Link to='/'><p className='text-center sm:text-left uppercase font-chakra text-[32px] font-bold text-primary'>logo</p></Link>
            <div className='flexCol'>
                <div className='justify-center flex gap-[2em] mt-[15px] sm:mt-0 text-gray-400 font-light'>
                    <Link to='/'><p className=' font-light text-[16px] sm:text-[18px] md:text-[20px] '>About</p></Link>
                    <Link to='/'><p className=' font-light text-[16px] sm:text-[18px] md:text-[20px]'>FAQs</p></Link>
                    <Link to='/'><p className=' font-light text-[16px] sm:text-[18px] md:text-[20px]'>Terms</p></Link>
                    <Link to='/'><p className=' font-light text-[16px] sm:text-[18px] md:text-[20px]'>Contact</p></Link>
                    
                </div>
            </div>
        </div>

        <hr className=' bg-gray-600 h-[1px] mx-auto w-[90%] my-[20px]'/>
        
        <p className='text-[14px]  lg:text-[18px] text-center pt-[1em] font-light text-gray-500'>© {new Date().getFullYear()} Brand, LLC. All rights reserved.</p>

    </footer>
  )
}

export default Footer
