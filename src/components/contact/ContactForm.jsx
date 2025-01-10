"use client"
import React from 'react'
import * as emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SendEmailPng from "../../assets/email.webp";


const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name:"",
        email: " ",
        message:" ",
    });
    const handleChange = (e)=>{
        const {name, value } = e.target;
        setFormData((prevFormData) =>({
            ...prevFormData,
            [name]:value,
        }))
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
          .sendForm(
            "service_3p4gghn",   // ID de votre service
            "template_ajjlfvs",  // ID de votre modèle
            e.target,            // Formulaire à soumettre
            "Z5UlJ81KJ5CtKswJ0"  // Clé publique
          )
          .then(
            (result) => {
              console.log("Email envoyé :", result.text);
              alert("Email envoyé avec succès");
            },
            (error) => {
              console.error("Erreur lors de l'envoi :", error.text);
              alert("Échec de l'envoi de l'email");
            }
          );

        setFormData({
            name:"",
            email: " ",
            message:" ",
        });
    };
  return (
    <section id='contact' className='bg-white dark:bg-slate-800 dark:text-white py-24'>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* form section  */}
            <motion.div  initial={{ opacity: 0}} whileInView= {{ opacity:1}} transition={{ duration : 0.8, delay: 0.5}} className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='bg-primary/45 p-8 rounded-xl w-full max-w-lg'>
                    <h2 className='text-2xl mb-4'>Get in touch</h2>
                    <div className='mb-4'>
                       <label className='block text-white/30' htmlFor="name">Name</label>
                       <input className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black dark:bg-white text-white' type="text" name='name' value={formData.name} onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                       <label className='block text-white/30' htmlFor="email">Email</label>
                       <input className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black dark:bg-white text-white' type="email" name='email' value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                       <label className='block text-white/30' htmlFor="message">Message</label>
                       <textarea className='mt-1 block w-full px-3 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black dark:bg-white text-white' name='message' value={formData.message} onChange={handleChange} />
                    </div>
                    <button type='submit' className='primary-btn my-6 mr-6 inline-block'>Send Email</button>
                </form>
            </motion.div>
            {/* Image section  */}
            <div className='hidden md:flex justify-center items-center'>
               <img className='w-[300px] animate-rocket ' src={SendEmailPng} alt='sendEmail'/>
            </div>
        </div>
    </section>
  )
}

export default ContactForm