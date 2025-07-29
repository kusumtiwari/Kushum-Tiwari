"use client";
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SidebarNavigation from './SidebarNavigation';

type HeroSectionProps = {
    activeNav: string;
    setActiveNav: (nav: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ activeNav, setActiveNav }) => {
    const [text, setText] = useState("");
    const introText = "Hi, I am ";
    const nameText = "Kushum Tiwari";
    const fullText = introText + nameText;

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = 2000 / fullText.length; // Distribute the 7s duration across all characters

        const typingTimer = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingTimer);
            }
        }, typingInterval);

        return () => clearInterval(typingTimer);
    }, []);

    // Function to determine which parts of the text should be colored
    const renderColoredText = () => {
        if (text.length <= introText.length) {
            // Only rendering the intro part so far
            return <span className="text-white">{text}</span>;
        } else {
            // Rendering both intro and part of the name
            const displayedNamePart = text.substring(introText.length);
            return (
                <>
                    <span className="text-white">{introText}</span>
                    <span className="text-primary ml-1">{displayedNamePart}</span>
                </>
            );
        }
    };

    return (
        
                <div className="*bg-orange-600">
                    <h2 className="text-3xl md:text-4xl font-bold flex flex-wrap items-center mb-6">
                        {renderColoredText()}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6}}
                            className="ml-1 text-primary"
                        >
                            |
                        </motion.span>
                    </h2>
            <h3 className="text-xl text-gray-300">
                Crafting sleek, accessible, and high-performance web interfaces is my passion.
                As a <span className="text-primary">Frontend Developer</span>, I turn creative ideas into visually striking and user-friendly experiences. Let’s build something exceptional together!
            </h3>

                   <SidebarNavigation activeNav={activeNav} setActiveNav={setActiveNav}/>
                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://github.com/kusumtiwari" target="_blank" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                            <FaGithub className="text-white text-xl" />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/kusum-tiwari-156201262/" target='_blank' className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                            <FaLinkedin className="text-white text-xl" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100086369593963" target='_blank' className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                            <FaFacebook className="text-white text-xl" />
                        </a>
                    </div>
                </div>
    );
};

export default HeroSection;