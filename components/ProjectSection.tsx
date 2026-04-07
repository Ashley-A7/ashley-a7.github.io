// components/Projects.tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section
            className="max-w-6xl bg-[#FDF5E6] text-[#1A1A1A] px-4 sm:px-6 md:px-12 py-10 md:py-12"
            id="work"
        >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#CCCCCC] pb-4 mb-6">
                <h2 className="text-xs tracking-widest text-[#777777]">
                    SELECTED PROJECTS
                </h2>
            </div>

            {/* Project List */}
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-5 border-b border-[#CCCCCC] hover:bg-[#f7efe0] transition"
                    >
                        {/* Left Side */}
                        <div className="flex items-start gap-4 sm:gap-6">
                            {/* Number */}
                            <span className="text-xs text-[#777777] w-6 flex-shrink-0">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Title + Description */}
                            <div className="max-w-full md:max-w-[420px]">
                                <h3 className="text-base font-medium text-[#1A1A1A]">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#333333] mt-1 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags (mobile only) */}
                                <div className="flex flex-wrap gap-2 mt-3 md:hidden">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs tracking-wide px-2 py-1 bg-[#E5E7EB] text-[#1F2937] border border-[#D1D5DB] rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side (desktop only) */}
                        <div className="hidden md:flex items-center gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs tracking-wide px-2 py-1 bg-[#E5E7EB] text-[#1F2937] border border-[#D1D5DB] rounded"
                                >
                                    {tech}
                                </span>
                            ))}

                            {/* Arrow */}
                            <ArrowUpRight
                                size={16}
                                className="ml-2 text-[#999999] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </div>

                        {/* Arrow for mobile */}
                        <div className="md:hidden flex justify-end">
                            <ArrowUpRight
                                size={16}
                                className="text-[#999999]"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}