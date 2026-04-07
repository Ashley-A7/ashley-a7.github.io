import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact";
import MarqueeTicker from "../components/MarqueeTicker";
import SkillSection from "../components/SkillSection";
import About from "../components/About";
import EDI from "../components/EDI";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-beige-100 text-gray-900">
            <Header />
            <main className="flex-grow">
                <Hero />
                <MarqueeTicker />
                <ProjectSection />
                <About />
                <SkillSection />
                <EDI/>
                <Contact />

            </main>
            <Footer />
        </div>
    );
}