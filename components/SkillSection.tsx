// components/About.tsx
import React from "react";

const skills = [
    { name: "React / Next.js", level: 92 },
    { name: "TypeScript", level: 82 },
    { name: "CSS / Tailwind", level: 95 },
    { name: "Python / Django", level: 72 },
    { name: "SEO & Analytics", level: 68 },
];

const compatibility = [
    { label: "Languages", value: "EN + FR" },
    { label: "Work style", value: "Agile, cross-functional" },
    { label: "Environment", value: "Agency, startup, remote" },
];

export default function About() {
    return (
        <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto bg-[#FDF5E6] text-[#1A1A1A] font-sans" id="#about">

            {/* Header */}
            <div className="border-b border-[#CCCCCC] pb-4 mb-10">
                <h2 className="text-xs tracking-widest text-[#777777]">
                   SKILLS & ABILITIES
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-[#DDD8CE]">

                {/* LEFT — STRUCTURED */}
                <div className="pr-0 md:pr-12 pb-10 border-b md:border-b-0 md:border-r border-[#DDD8CE]">

                    {/* Technical */}
                    <p className="uppercase text-xs text-[#777777] tracking-widest mb-6">
                        Technical specs
                    </p>

                    <div className="flex flex-col gap-5 mb-12">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex justify-between items-center">
                                <span className="text-sm text-[#333333]">
                                    {skill.name}
                                </span>

                                <div className="w-28 h-[2px] bg-[#E0E0E0] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#1A1A1A]"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

                {/* RIGHT — EDITORIAL */}
                <div className="pl-0 md:pl-12 pb-10">

            
                    {/* Compatibility */}
                    <p className="uppercase text-xs text-[#777777] tracking-widest mb-6">
                        Compatibility
                    </p>

                    <div>
                        {compatibility.map((item) => (
                            <div
                                key={item.label}
                                className="flex justify-between items-center py-4 border-b border-[#E0E0E0]"
                            >
                                <span className="text-sm text-[#555555]">
                                    {item.label}
                                </span>

                                <span className="text-sm text-[#1A1A1A] text-right max-w-[60%]">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}