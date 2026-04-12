import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Projetos from './components/Projetos';
import Contato from "./components/Contato";
import Footer from './components/Footer';

import './styles/App.css';

export default function App() {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Experience />
            <Projetos />
            <Contato />
            <Footer />
        </>
    );
}