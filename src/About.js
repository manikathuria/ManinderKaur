import React, { useEffect } from 'react';
import './About.css'
import Particles from "react-tsparticles";
import Particle from './Particles'

import Aos from "aos"
import "aos/dist/aos.css"
import Skills from './Skills'
import musicImg from './music2.jpg'
import travelImg from './travel1.jpg'
import newsImg from './news1.jpg'
import abtImg from './abt1.jpg'




function About() {

    useEffect(() => {

        Aos.init({ duration: 2000 })
    }, [])



    return (
        <div className="about">
            <table>
                {/* ABOUT */}
                <tr data-aos="flip-left">
                    <td >
                        <div style={{ background: { abtImg } }} className="left_side_about">
                            <img className="about_image" src={abtImg}></img>
                        </div>
                    </td>
                    <td data-aos="fade-up" className="right_side">

                        <div className="slide_container">

                            <div className="about_me">

                                I am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work.
                                I am an excellent team worker and am able to take instructions from all levels and build up good working relationships
                                with all colleagues. I am flexible, reliable and possess excellent time keeping skills.
                                <br></br>
                                <br></br>
                                <h3>STRENGTHS</h3><br></br>
                                <div className="my_strenghts">
                                    - FLEXIBILITY<br></br>
                                 - DEDICATION<br></br>
                                 - HONESTY<br></br>
                                 - FOCUSED<br></br>
                                </div><br></br>
                                <h3>WEAKNESSES</h3><br></br>
                                <div className="my_weaknesses">
                                    - SELF-CRITICISM <br></br>
                                 - INSECURE
                                </div>
                                <br></br>
                                {/* <span className="my_titles_about">EDUCATION</span> */}
                                <h2>EDUCATION</h2><br></br>
                                <hr style={{ borderTop: "#fff 2px solid" }}></hr><br></br>
                                <h3>B.Sc.(Hons.) Computer Science</h3><br></br>
                                Pursuing B.Sc.(H) Computer Science from <br></br>
                                S.G.T.B. Khalsa College<br></br>
                                Delhi University<br></br>
                                (2018 - 2021)
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3>SCHOOLING</h3><br></br>
                                Guru Harkrishan Public School  , <br></br>
                                Kalkaji , New Delhi -19.<br></br>
                                Class 10th - 85.5%(2015-2016)<br></br>
                                Class 12th - 74.4%(2017 - 2018)<br></br>

                                <Skills />

                                <h2>PROJECTS</h2><br></br>
                                <hr style={{ borderTop: "#fff 2px solid" }}></hr><br></br>
                                <h3>FULL STACK PROJECT</h3><br></br><br></br>
                                     Instagram clone using MERN Stack<br></br>
                                     Air Ticket Reservation System using PHP and Bootstrap<br></br><br></br>
                                <h3>FRONT END PROJECT</h3><br></br>
                                  HULU clone using ReactJS<br></br>
                                <br></br>
                                <hr></hr>
                            </div>

                            <br></br>
                        </div>
                        <div className="scroll_info">
                            <p>Click above and press down key
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4
                                             4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                                
                            to scroll</p>
                        </div>
                    </td>

                </tr>

                {/* INTERESTS */}
                <tr data-aos="fade-up">
                    <td className="left_side_interests">


                        <Particle />
                        <div className="header_interests">
                            INTERESTS
                        </div>

                    </td>
                    <td className="right_side_interests">

                        <div className="slide_container">

                            <div className="slider_image_1">
                                <h2>LISTENING MUSIC</h2>
                                <img src={musicImg} ></img>
                            </div>
                            <div className="slider_image_2">
                                <h2>TRAVELLING</h2>
                                <img src={travelImg} ></img>
                            </div>
                            <div className="slider_image_3">
                                <h2>READING</h2>
                                <img src={newsImg}  ></img>
                            </div>

                        </div>
                        <div className="scroll_info">
                            <p>Click above and press
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4
                                             4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                            key to scroll</p>
                        </div>
                    </td>
                </tr>
                {/* CONTACTS */}

            </table>

        </div>
    );
}
export default About