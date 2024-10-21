import React from 'react';
import logo from '../assets/logo.png'
import { motion } from "framer-motion";



function Navbar() {

    return (
        <div className="w-[100vw] relative container overflow-x-hidden">
            <motion.div initial={{opacity: 0, y: -160}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.7, delay:1.8}}
                        className="navbar w-full py-4 backdrop-blur-sm top-0 left-0 fixed z-50">
                <div className="w-full flex justify-between container items-center z-10 !blur-none mx-auto border-b-[1px] border-white py-1">
                    <a href='#landing' className='w-[6rem]'>
                        <img className='object-scale-down' src={logo} alt={logo}/>
                    </a>

                    <div className='flex gap-1 sm:pr-12'>
                        <a href='#works' className="text-white font-semibold">works,</a>
                        <a href='#about' className="text-white font-semibold">about,</a>
                        <a href='#contact' className="text-white font-semibold">contact</a>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

export default Navbar;
