import React, { useState } from 'react'
import { motion } from 'framer-motion'

type SkillItem = {
    name: string;
    level: number;
}

type SkillCategories = {
    frontend: SkillItem[];
    state: SkillItem[];
    backend: SkillItem[];
    tools: SkillItem[];
}

type CategoryKey = keyof SkillCategories;

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('frontend')

    const skillCategories: SkillCategories = {
        frontend: [
            { name: 'HTML/CSS (Tailwind CSS, Bootstrap, MUI)', level: 90 },
            { name: 'ReactJs & Next Js', level: 90 },
            { name: 'JavaScript & TypeScript', level: 95 },
            { name: 'Figma', level: 85 },
            { name: 'ShandcnUI, Antd', level: 88 },
        ],
        state: [
            { name: 'Redux', level: 85 },
            { name: 'Zustand', level: 80 },
            { name: 'React Query/TanStack Query', level: 82 },
            { name: 'Context API', level: 88 },
            { name: 'Framer Motion', level: 78 },
        ],
        backend: [
            { name: 'Node.js', level: 80 },
            { name: 'Express', level: 75 },
            { name: 'MongoDB', level: 70 },
            { name: 'REST API', level: 85 },
            { name: 'GraphQL', level: 65 },
        ],
        tools: [
            { name: 'Git, Github, GitLab', level: 85 },
            { name: 'Webpack', level: 80 },
            { name: 'Figma', level: 75 },
            { name: 'CI/CD Pipeline & Docker', level: 65 },
        ]
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
                stiffness: 100
            }
        }
    }

    const tabVariants = {
        active: {
            borderBottom: "2px solid #01dbc6",
            color: "#01dbc6",
            fontWeight: "bold"
        },
        inactive: {
            borderBottom: "2px solid transparent",
            color: "#9ca3af"
        }
    }

    return (
        <div className="py-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-white">Skills</h2>

            <div className="flex flex-wrap gap-6 mb-4 border-gray-700 pb-2">
                {(Object.keys(skillCategories) as CategoryKey[]).map((category) => (
                    <motion.button
                        key={category}
                        className="text-lg pb-2 capitalize"
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeCategory === category ? "active" : "inactive"}
                        onClick={() => setActiveCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <motion.div
                className="grid grid-cols-1 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={activeCategory}
            >
                {skillCategories[activeCategory].map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="bg-gray-800 rounded-lg p-4"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span style={{ color: "#01dbc6" }}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <motion.div
                                style={{
                                    background: "linear-gradient(to right, #01dbc6, #01dbc6)"
                                }}
                                className="h-1.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <p className="text-gray-400 italic">Continuous learner, always expanding my skill set</p>
            </motion.div>
        </div>
    )
}

export default Skills