// components/About.tsx
import React from "react";

export default function About() {
    return (
        <section className="px-12 py-12 max-w-6xl mx-auto bg-[#FDF5E6] text-[#1A1A1A] font-sans" id="about">

            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#CCCCCC] pb-4 mb-6">
                <h2 className="text-xs tracking-widest text-[#777777]">
                   ABOUT
                </h2>
            </div>

            {/* Body content */}
            <div className="max-w-2xl space-y-6 text-[#333333] text-base leading-relaxed">
                <p>
                    I enjoy turning ideas into fully realized digital products, working closely with teams to make concepts tangible and effective.
                </p>

                <p>
                    Throughout my projects and internships, I've collaborated with designers, worked
                    through UX/UI decisions, and translated ideas into fully
                    functional interfaces, from initial concept to final delivery.
                </p>

                <p>
                    I'm particularly interested in how teams work together; aligning
                    design with development, supporting content decisions, and ensuring
                    that what we build serves users.
                </p>
            </div>
        </section>
    );
}