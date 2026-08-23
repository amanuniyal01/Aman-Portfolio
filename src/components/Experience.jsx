import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "Karya Sync",
        location: "New Delhi, India",
        period: "Jun 2026 - Present",
        points: [
            "Engineered and integrated 20+ REST APIs into a React.js and TypeScript admin dashboard, building reusable components, API-driven workflows, and responsive UI for multiple administrative features.",
            "Architected an end-to-end Site Issue Management feature across React Native, ASP.NET, and PostgreSQL, including database schema design, validation, and full CRUD API workflows.",
            "Implemented frontend Role-Based Access Control (RBAC) using React and TypeScript, managing user roles and applying permissions across protected routes, navigation, and dashboard features.",
            "Delivered interactive dashboard analytics and data visualizations using API-driven data and chart components, using Redux for centralized state management across the application.",
            "Designed and styled reusable React Native components for cross-platform mobile workflows, integrating REST APIs and handling loading, success, error, and dynamic data states.",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="portfolio-section min-h-screen px-6 py-28 text-white sm:px-8"
        >
            <div className="mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-heading text-center"
                >
                    Experience
                </motion.h2>

                <div className="relative ml-3 border-l-2 border-blue-400/50 sm:ml-5">
                    {experiences.map((experience, index) => (
                        <motion.article
                            key={`${experience.company}-${experience.role}`}
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
                        >
                            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-gray-900 bg-blue-400" />

                            <div className="glass-panel rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/30 sm:p-8">
                                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                                        <p className="mt-1 text-lg font-medium text-blue-300">{experience.company}</p>
                                    </div>
                                    <div className="text-sm text-gray-400 sm:text-right">
                                        <p>{experience.period}</p>
                                        <p className="mt-1">{experience.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-3 text-gray-300">
                                    {experience.points.map((point) => (
                                        <li key={point} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-400" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;