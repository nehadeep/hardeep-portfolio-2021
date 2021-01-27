import {Nav} from "react-bootstrap";
import React from "react";
import {AppLink} from "./Navbar";


const Hero = ()=>{
    return(
        <section className="fj-hero">
            <div className="fj-hero-wrapper row">
                <div className="hero-left col-md-6">
                    <h1 className="white hero-title">Hey I'm Hardeep Kaur. Experienced Senior Front End Developer with 6.5+ years of experience</h1>
                    <h2 className="white hero-subtitle">React16+ , Angular 8+</h2>
                    <div className="button-container">
                        <AppLink href="/portfolios" className="btn btn-main bg-blue ttu">
                            See my work
                        </AppLink>

                         <a className="external-links" href="https://github.com/nehadeep" target="_blank" style={{display: 'inline-grid', marginLeft: '10px', color:'#fff'}}>
                           <img src="/github-logo.png" className="git-hub-link" alt="githubLink"/>
                            <span>Git Hub</span>
                         </a>

                    </div>
                </div>
                <div className="hero-right col-md-6">
                    <div className="hero-image-container">
                        <a className="grow hero-link">
                            <img
                                className="hero-image"
                                src="https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg"></img>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;