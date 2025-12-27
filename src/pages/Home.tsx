import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

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