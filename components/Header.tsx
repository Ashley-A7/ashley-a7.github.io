// components/Header.tsx
import React from "react";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-[#FDF5E6] border-b border-[#CCCCCC]">
            {/* Logo / Name */}
            <div className="font-bold text-sm tracking-wide text-[#1A1A1A]">
                ASHLEY ARENAS
            </div>

            {/* Navigation */}
            <nav className="space-x-8 text-[#555555] text-sm font-medium">
                <a href="#work" className="hover:text-[#1A1A1A]">
                    Work
                </a>
                <a href="#about" className="hover:text-[#1A1A1A]">
                    About
                </a>
                <a href="#contact" className="hover:text-[#1A1A1A]">
                    Contact
                </a>
            </nav>

        </header>
    );
}