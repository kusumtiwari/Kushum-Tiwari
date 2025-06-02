import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            period: "04/2024 – Present",
            role: "Frontend Developer",
            company: "Ekganti Services",
            location: "Kathmandu, Nepal",
            description: [
                "Led the development and setup of a comprehensive CRM application, independently handling the entire frontend architecture.",
                "Mentored and assisted interns in their development tasks, fostering their growth in frontend technologies.",
                "Demonstrated a deep understanding of frontend development, delivering high-quality, user-centric solutions."
            ],
        },
        {
            period: "12/2023 – 03/2024",
            role: "Frontend Developer",
            company: "One Window International",
            location: "Kathmandu, Nepal",
            description: [
                "Worked on Ecommerce and Business Portfolios Frontend Development"
            ],
        },
        {
            period: "09/2023 – 11/2023",
            role: "Frontend Intern",
            company: "Spell Innovations",
            location: "Kathmandu, Nepal",
            description: [
                "Worked on E-commerce Platforms Frontend Development"
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const experienceVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 50,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 50
            }
        }
    };

    return (
        <div className="text-gray-300 p-8 h-full">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-6 text-white"
                >
                    Experience
                </motion.h2>

                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-12 gap-4"
                            variants={experienceVariants}
                            whileHover={{
                                backgroundColor: "rgba(38, 38, 38, 0.3)",
                                borderRadius: "0.5rem",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {/* Left side - Timeline */}
                            <motion.div
                                className="col-span-3 text-gray-400 font-medium relative pl-4 pt-2"
                                variants={itemVariants}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-0 top-3 w-2 h-2 rounded-full bg-primary"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.4 + 0.3, duration: 0.3 }}
                                />

                                {/* Timeline line */}
                                {index < experiences.length - 1 && (
                                    <motion.div
                                        className="absolute left-1 top-5 w-[1px] bg-gray-700"
                                        style={{ height: "calc(100% + 2rem)" }}
                                        initial={{ scaleY: 0, originY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ delay: index * 0.4 + 0.4, duration: 0.5 }}
                                    />
                                )}

                                {experience.period}
                            </motion.div>

                            {/* Right side - Job Details */}
                            <motion.div
                                className="col-span-9 pt-2"
                                variants={itemVariants}
                            >
                                {/* Title and Company */}
                                <motion.div className="mb-4">
                                    <motion.h3
                                        className="text-lg font-bold text-primary flex items-center gap-2 mb-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.4 + 0.2, duration: 0.3 }}
                                    >
                                        {experience.role} • {experience.company}
                                        {/* <motion.span
                                            whileHover={{ rotate: 45 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ExternalLink size={16} className="text-gray-400" />
                                        </motion.span> */}
                                    </motion.h3>

                                    <motion.p
                                        className="text-sm text-gray-400 mb-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.4 + 0.3, duration: 0.3 }}
                                    >
                                        {experience.location}
                                    </motion.p>

                                    <motion.ul className="list-disc pl-5 space-y-2">
                                        {experience.description.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.4 + 0.4 + (i * 0.1), duration: 0.3 }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;