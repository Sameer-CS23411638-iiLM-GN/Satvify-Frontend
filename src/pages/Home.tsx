import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Categories from "../components/sections/Categories";
import Plans from "../components/sections/Plans";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <Plans />
            <Features />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Home;