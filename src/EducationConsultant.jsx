import React from "react";
import { PiCertificateLight } from "react-icons/pi";
import "./EducationConsultant.css";


const EducationConsultant = () => {
    const cards = [
        { id: 1, count: "10+", text: "CAREER GUIDES" },
        { id: 2, count: "13+", text: "YEARS OF EXPERIENCE" },
        { id: 3, count: "200+", text: "ENROLMENTS" },
        { id: 4, count: "200+", text: "CUSTOMER TESTIMONIALS" },
    ];

    return (
        <div className="consultant-container">
            <h1 className="title">Best Education Consultant</h1>
            <p className="subtitle">
                Fix a meeting with us & get honest advice and guaranteed admission in top
                universities around the world!
            </p>
            <div className="cards">
                {cards.map((card) => (
                    <div key={card.id} className="card">


                        <h2>{card.count}</h2>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationConsultant;