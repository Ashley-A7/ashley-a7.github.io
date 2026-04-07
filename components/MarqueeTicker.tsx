const items = [
    { text: "Frontend Development" },
    { text: "UX/UI Collaboration" },
    { text: "Content & Strategy" },
    { text: "Bilingual (EN/FR)"},
    { text: "Cross-functional Teams" },
    { text: "Digital Strategy"},
    { text: "Agile Workflows" },
    { text: "Creative Problem Solving" },
    { text: "React / Next.js" },
];

export default function MarqueeTicker() {
    const repeated = [...items, ...items];

    return (
        <>
            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
      `}</style>

            <div className="w-full bg-[#1A1A1A] py-3 overflow-hidden">
                <div className="marquee-track flex whitespace-nowrap">
                    {repeated.map((item, i) => (
                        <span
                            key={i}
                            className="text-[11px] uppercase tracking-widest px-5 border-r border-[#2A2A2A] text-[#FDF5E6]"
                        >
                            {item.text}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
