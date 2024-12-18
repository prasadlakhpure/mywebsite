import React from "react";
import "./Footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {



    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Assumenda ab, veritatis ducimus, debitis officiis atque
                        repudiandae consequatur sequi provident culpa eum molestias
                        vel similique adipisci!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, aspernatur magnam. Reiciendi
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 9356497841</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: globaledu@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Engg. Destination</div>
                    <span className="text" >Study Engg in Russia</span>
                    <span className="text" >Study Engg in Belarus</span>
                    <span className="text" >Study Engg in Georgia</span>
                    <span className="text" >Study Engg in Mongolia</span>
                    <span className="text">Stud Engg in China</span>

                </div>
                <div className="col">
                    <div className="title">Quick Link</div>
                    <span className="text">MBA</span>
                    <span className="text">Engg</span>
                    <span className="text">Study Abroad</span>
                    <span className="text">Engg Abroad</span>
                    <span className="text">Engg Admission</span>

                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        GLOBALEDU 2024 CREATED BY PRASAD LAKHPURE. PREMIUM EDUCATION
                        SOLUTIONS.
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Footer;