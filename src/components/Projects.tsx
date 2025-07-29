import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
    const ecommerceProjects = [
        {
            name: "Softy Ecommerce",
            url: "https://www.softy.com.np/",
            stack: ["Next.js", "Supabase", "shadcn/ui", "Clerk"],
            description: [
                "Collaborated with a team to build a scalable ecommerce platform.",
                "Authentication handled using Clerk.",
                "Supabase used for backend and data operations.",
                "Styled using TailwindCSS and shadcn/ui.",
            ],
        },
    
    ];

    const portfolioProject = {
        name: "Tamang Business Portfolio",
        url: "https://portfolio-website-eight-sable-38.vercel.app/",
        stack: ["React", "TypeScript", "TailwindCSS"],
        description: [
            "Responsive portfolio for a business client (name hidden for privacy).",
            "Showcased initiatives, publications, and past projects.",
            "Built with a focus on clean design and mobile-first responsiveness.",
        ],
    };

    const saasProjects = [
        {
            name: "Orbit360 Dashboard",
            url: null, // Private domain
            stack: ["React", "TypeScript", "Zustand", "TanStack Query", "Ant Design","Redux", "Tailwind"],
            description: [
                "Feature-rich SaaS admin dashboard for internal operations.",
                "Real-time reports generation with web socket integration",
                "User module with fine-grained role-based controls.",
                "Live chat UI with automated workflows.",
                "Facebook Meta Business API Integration",
                "Custom form builder with drag-and-drop support.",
                "Designed for high performance, usability, and seamless real-time interactivity.",
            ],
        },
        {
            name: "Orbit360 App",
            url: null, // Private domain
            stack: ["React", "TypeScript", "Redux", "React Query", "Framer Motion"],
            description: [
                "Unified customer operations platform for SaaS management.",
                "Modules include:",
                "- TaskBird: smart task assignment & tracking system.",
                "- CRM: centralized lead & customer management.",
                "- Communication: integrated chat, call, and messaging systems.",
                "Built with real-time performance and responsive design in mind.",
            ],
        },
    ];

    return (
        <div className="text-gray-300 p-8">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-6 text-white"
                >
                    Projects
                </motion.h2>
                {/* SaaS Projects */}
                <motion.div
                className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold text-primary mb-4 mt-4">SaaS Platforms</h3>
                    <div className="space-y-6">
                        {saasProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-zinc-800/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-lg font-bold text-white">{project.name}</h4>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary transition"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Tech Stack: {project.stack.join(", ")}
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-2">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                {/* Ecommerce Projects */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold text-primary mb-4">Ecommerce Platforms</h3>
                    <div className="space-y-6">
                        {ecommerceProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-zinc-800/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-lg font-bold text-white">{project.name}</h4>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary transition"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Tech Stack: {project.stack.join(", ")}
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-2">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Business Portfolio */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold text-primary mb-4">Business Portfolio</h3>
                    <motion.div
                        className="bg-zinc-800/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-white">{portfolioProject.name}</h4>
                            <a
                                href={portfolioProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition"
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                            Tech Stack: {portfolioProject.stack.join(", ")}
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-2">
                            {portfolioProject.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

               
            </div>
        </div>
    );
};

export default Projects;
