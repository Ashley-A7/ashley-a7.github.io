import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-beige-100 text-gray-900">
            <Header />
            <main className="flex-grow">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}