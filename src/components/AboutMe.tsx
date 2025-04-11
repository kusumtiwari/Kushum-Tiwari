import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 70
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="py-12 px-4 max-w-4xl mx-auto"
        >
            <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-white"
            >
                About Me
            </motion.h3>

            <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg"
            >
                I specialize in creating responsive, user-friendly web applications using modern technologies like React, Next.js, and Tailwind CSS. With a keen eye for design and a passion for clean code, I build digital experiences that not only look great but also perform exceptionally well.
            </motion.p>

            <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg my-4"
            >
                Whether you're looking to launch a new product, revamp an existing website, or build a complex web application, I have the skills and experience to bring your vision to life.
            </motion.p>

            <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg"
            >
                I specialize in creating responsive, user-friendly web applications using modern technologies like React, Next.js, and Tailwind CSS. With a keen eye for design and a passion for clean code, I build digital experiences that not only look great but also perform exceptionally well.
            </motion.p>

            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
            >
                <motion.button
                    className="bg-primary text-secondary font-bold py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors"
                    whileHover={{ boxShadow: "0 0 12px rgba(1, 219, 198, 0.5)" }}
                >
                    Get In Touch
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default AboutMe