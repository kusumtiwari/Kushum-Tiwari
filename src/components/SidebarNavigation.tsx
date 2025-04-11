import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from 'react-icons/fa';
import { SiGumroad } from 'react-icons/si';

type SidebarNavigationProps = {
    activeNav: string;
    setActiveNav: (nav: string) => void;
};


const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeNav, setActiveNav }) => {
    return (
        <div className="flex flex-col justify-between h-full py-16">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6">
                <div className="flex items-center cursor-pointer" onClick={() => setActiveNav('ABOUT')}>
                    <div className={`w-16 h-0.5 ${activeNav === 'ABOUT' ? 'bg-white' : 'bg-gray-500'} mr-4`}></div>
                    <span className={`uppercase font-medium ${activeNav === 'ABOUT' ? 'text-white' : 'text-gray-500'}`}>
                        About
                    </span>
                </div>

                <div className="flex items-center cursor-pointer" onClick={() => setActiveNav('EXPERIENCE')}>
                    <div className={`w-12 h-0.5 ${activeNav === 'EXPERIENCE' ? 'bg-white' : 'bg-gray-500'} mr-4`}></div>
                    <span className={`uppercase font-medium ${activeNav === 'EXPERIENCE' ? 'text-white' : 'text-gray-500'}`}>
                        Experience
                    </span>
                </div>
{/* 
                <div className="flex items-center cursor-pointer" onClick={() => setActiveNav('PROJECTS')}>
                    <div className={`w-12 h-0.5 ${activeNav === 'PROJECTS' ? 'bg-white' : 'bg-gray-500'} mr-4`}></div>
                    <span className={`uppercase font-medium ${activeNav === 'PROJECTS' ? 'text-white' : 'text-gray-500'}`}>
                        Projects
                    </span>
                </div> */}
                <div className="flex items-center cursor-pointer" onClick={() => setActiveNav('SKILLS')}>
                    <div className={`w-12 h-0.5 ${activeNav === 'PROJECTS' ? 'bg-white' : 'bg-gray-500'} mr-4`}></div>
                    <span className={`uppercase font-medium ${activeNav === 'PROJECTS' ? 'text-white' : 'text-gray-500'}`}>
                        Skills
                    </span>
                </div>
            </div>

        </div>
    );
};

export default SidebarNavigation;