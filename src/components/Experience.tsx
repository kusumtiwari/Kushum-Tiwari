import { ExternalLink } from 'lucide-react';

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

    return (
        <div className=" text-gray-300 p-8 h-full">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4">
                            {/* Time Period */}
                            <div className="col-span-3 text-gray-400 font-medium">
                                {experience.period}
                            </div>

                            {/* Job Details */}
                            <div className="col-span-9">
                                {/* Title and Company */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-1">
                                        {experience.role} • {experience.company}
                                     
                                    </h3>

                                    <p>{experience?.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;