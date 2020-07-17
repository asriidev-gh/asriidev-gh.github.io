import React from 'react'
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import PorfolioPage from './pages/PorfolioPage';
import ContactPage from './pages/ContactPage';
import IntroPage from './pages/IntroPage';

function PageWrapper() {
    return (        
        <div>
            {/* ======= Mobile nav toggle button ======= */}
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
            {/* ======= Header ======= */}
            <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src="assets/img/asrii_profile_pic_thumb.jpg" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Andy R.</a></h1>
                    <div className="social-links mt-3 text-center">                    
                        <a href="#about" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#about" className="instagram"><i className="bx bxl-instagram" /></a>                    
                        <a href="#about" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li className="active"><a href="index.html"><i className="bx bx-home" /> <span>Home</span></a></li>
                        <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
                        <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                        <li><a href="#portfolio"><i className="bx bx-book-content" /> Portfolio</a></li>                    
                        <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
                    </ul>
                </nav>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
            </div>
            </header>{/* End Header */}
            
            <IntroPage />
            
            <main id="main">            
                <AboutPage />
                <SkillsPage />
                <ResumePage />
                <PorfolioPage />            
                <ContactPage />            
            </main>
           
            <a href="#about" className="back-to-top"><i className="icofont-simple-up" /></a>
        </div>    
    )
}

export default PageWrapper