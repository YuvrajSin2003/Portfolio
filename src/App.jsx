import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Project from "./sections/Project.jsx";
import Client from "./sections/Client.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero/>
            <About/>
            <Project/>
            <Client/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
