import './App.css';
import styled from 'styled-components';
import {Header} from './components/Header/Header';
import GlobalStyleDefault from "./styles/StylesDefault.ts";
import {HeroSection} from "./components/Body/HeroSection/HeroSection.tsx";
import {InfoHero} from "./components/Body/InfoHeroSection/InfoHero.tsx";
import {ServicesSection} from "./components/Body/ServicesSection/ServicesSection.tsx";
import {ProjectsSection} from "./components/Body/ProjectsSection/ProjectsSection.tsx";
import {FormSection} from "./components/Form/FormSection.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {theme} from "./styles/Theme.ts";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";

function App() {
    return (
        <>
            <GlobalStyleDefault/>
            <StyledApp className="App">
                <Particle/>
                <Header/>
                <HeroSection/>
                <InfoHero/>
                <ServicesSection/>
                <ProjectsSection />
                <FormSection />
                <Footer/>
                <GoTopBtn />
            </StyledApp>
        </>

    );
}

export default App;

const StyledApp = styled.div`
    background-color: ${theme.colors.primaryBg};
`;

