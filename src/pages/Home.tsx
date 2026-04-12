import React from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Projetos';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <main>
                <About />
                <Experience />
                <Skills />
            </main>
            <Footer />
        </>
    );
}