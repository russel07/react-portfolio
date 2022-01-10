import React from 'react';

import Header from './Header';
import Footer from './Footer';

import me from '../img/me.png';
import resume from '../doc/resume.pdf';

function About(){
    return (
        <div>
            <Header/>

            <div id="aboutMe" className="about-area">
                <div className="about container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-12 float-left">
                            <div className="common-header">
                                <p>Why Choose Me?</p>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 float-left">
                            <div className="about-content wow animated fadeInUp" data-wow-delay="0.5sec">
                                <div className="row">
                                    <div className="col-md-6 float-left">
                                        <div className="about-left">
                                            <img src={me} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 float-left">
                                        <div className="about-right">
                                            <p>Have been working for more than seven years in the field of Web Development. Worked as a developer as well as lead developer, team leader, and project manager. I believe I have the ability to provide the best services to the clients to meet their needs. </p>
                                            
                                            <ul>
                                                <li><i className="fas fa-check-square"></i>Full Stack web development</li>
                                                <li><i className="fas fa-check-square"></i>Interactive Front End as per the design</li>
                                                <li><i className="fas fa-check-square"></i>Custom template design using html, css and JavaScript</li>
                                                <li><i className="fas fa-check-square"></i>Backend development and REST API implementation</li>
                                                <li><i className="fas fa-check-square"></i>Third party API integration and enhancement</li>
                                            </ul>
                                            
                                            <a href="https://fiverr.com/mdrusselhussain" className="btn border-btn">Hire me</a>
                                            <a href={resume} className="btn box-btn" download>Get Resume</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
export default About