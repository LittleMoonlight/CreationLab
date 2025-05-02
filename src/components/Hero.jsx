import React from "react"
import Logo from '../assets/logo.png'
import heroImage from '../assets/bg.jpg'
import { motion } from "framer-motion";
const Hero = () => {
    return(
    
<section className="relative flex items-center justify-center h-[500px] md:h-[700px] w-full overflow-hidden">
      {/* Background image with zoom effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 bg-white/10"
      ></motion.div>

      {/* Logo with fade and slide down effect */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="relative text-center text-white z-10"
      >
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-[400px] md:w-[600px] px-3 py-3"
        />
      </motion.div>
    </section>

    
  )
}

export default Hero;