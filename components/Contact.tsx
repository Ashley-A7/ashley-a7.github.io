const contactLinks = [
    { label: "Email", value: "ashley_arenas@hotmail.com", href: "mailto:ashley_arenas@hotmail.com" },
    { label: "GitHub", value: "github.com/Ashley-A7", href: "https://github.com/Ashley-A7" },
    { label: "LinkedIn", value: "linkedin.com/in/ashleyarenas", href: "https://linkedin.com/in/ashleyarenas" },
    { label: "Portfolio", value: "ashley-a7.github.io", href: "https://ashley-a7.github.io" },
];

export default function Contact() {
    return (
        <section className="px-12 py-12 max-w-6xl mx-auto bg-[#FDF5E6] text-[#1A1A1A] font-sans" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                {/* Left — headline + body */}
                <div>
                    <h2 className="text-4xl font-extrabold leading-tight mb-6 text-[#1A1A1A]">
                        Let's work together<br />
                    </h2>
                    <p className="text-base text-[#333333] leading-relaxed max-w-md">
                        I'd love to join a team where I can contribute both technically and creatively, helping to bring ideas to life!
                    </p>
                </div>

                {/* Right — contact links */}
                <div className="flex flex-col">
                    {contactLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex justify-between items-center py-5 border-b border-[#DDD8CE] first:border-t first:border-[#DDD8CE] hover:opacity-60 transition-opacity duration-150 no-underline"
                        >
                            <span className="text-xs uppercase tracking-widest  [#1F2937] ]">
                                {item.label}
                            </span>
                            <span className="text-sm font-semibold text-[#1A1A1A]">
                                {item.value}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}