export default function Hero() {
  return (
    <section className="flex-grow px-12 py-12 max-w-6xl mx-auto bg-[#FDF5E6] text-[#1A1A1A] font-sans">
      {/* Small subtitle */}
      <p className="uppercase text-xs text-[#555555] tracking-widest mb-2">
            Creative Application · COSSETTE · 2026
      </p>

      {/* Main name */}
      <h1 className="text-6xl font-extrabold mb-2 leading-tight">
        Ashley Arenas
      </h1>

      {/* Role subtitle */}
        <h2 className="max-w-md text-3xl italic font-light text-[#777777] mb-8">
              Introducing the candidate 
              that turns concepts into impactful digital solutions.
      </h2>

      {/* Description */}
      <p className="max-w-lg text-base text-[#333333] mb-8">
              I'm a web developer student graduating in April 2026, fascinated by how digital experiences come to life through design, content, and code. I'm eager to contribute to the creativity and impact of a collaborative agency team.
      </p>

        {/* Buttons */}
        <div className="flex space-x-4">
            <a
                href="#contact"
                className="px-6 py-3 border border-[#A87F30] text-[#A87F30] rounded-md font-semibold hover:bg-[#E3BC6D] hover:text-[#1A1A1A] transition-colors duration-300"
            >
                Get in touch
            </a>
        </div>
    </section>
  );
}