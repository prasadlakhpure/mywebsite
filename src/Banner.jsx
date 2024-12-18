import React from "react";
import "./Banner.css";
import backgroundImage from "./assets/Background.jpg";

const Banner = () => {
    return (
        <div className="study-abroad" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                <div className="info">
                    <h1>Study Abroad with upGrad</h1>
                    <p>Building Careers Globally</p>
                    <div className="stats">
                        <div>
                            <strong>80+</strong>
                            <p>University Partners</p>
                        </div>
                        <div>
                            <strong>10K+</strong>
                            <p>Careers Transformed</p>
                        </div>
                    </div>
                    <button className="explore-btn">Explore Courses</button>
                </div>
                <div className="form-container">
                    <h3>International Degree Now in Your Budget</h3>
                    <p>250+ courses | 5 countries</p>
                    <form>
                        <label>Phone number</label>
                        <div className="phone-input">
                            <select>
                                <option value="+91">+91</option>
                            </select>
                            <input type="text" placeholder="Enter phone number" />
                        </div>
                        <button type="submit" className="counseling-btn">
                            Book Your Free Counseling
                        </button>
                        <p className="terms">
                            By submitting this form, you agree to the{" "}
                            <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;