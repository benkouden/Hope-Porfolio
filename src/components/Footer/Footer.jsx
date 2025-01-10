"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import {FaFacebook, FaInstagram,  FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className='bg-secondary dark:bg-gray-900 dark:text-white py-12'>
        <div className="container">
            <motion.div initial={{ opacity: 0}} whileInView= {{ opacity:1}}  className=' bg-gradient-to-r from-primary to-primary/20 py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300 '>
               <div className='space-y-3'>
                <h2 className='text-3xl font-bold'>Hope 😋😎</h2>
                <p>Digital2empire@gmail.com</p>
                <p>copyright © 2025 Hope</p>
               </div>
               <div className='flex items-center gap-3 lg:gap-10'>
                 <div>
                    <a href="#"><FaLinkedin className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://www.instagram.com/hope_bls?igsh=bHkya2p5MW12aHIx&utm_source=qr"><FaInstagram className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://www.facebook.com/share/18N9hH1fT3/?mibextid=wwXIfr"><FaFacebook className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="#"><FaGithub className="text-4xl" /></a>
                 </div>
               </div>
            </motion.div>
        </div>
    </footer>
  )
}

export default Footer