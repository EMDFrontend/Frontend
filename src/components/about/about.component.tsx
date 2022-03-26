import React from 'react';
import './about.styles.scss';
import { Link } from 'react-router-dom';


export default function About() {
    return(
        <div className="about__container">
            <h2>About Us</h2>
            <div className="about__container--flex">
            <div className="card">
            <img alt='' />
            <div className="details">
                <h2>John Doe</h2>
                <p>Dictator</p>
            </div>
            <p id="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card">
                <img alt='' />
                <div className="details">
                    <h2>John Doe</h2>
                    <p>Dictator</p>
                </div>
                <p id="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card">
                <img alt='' />
                <div className="details">
                    <h2>John Doe</h2>
                    <p>Dictator</p>
                </div>
                <p id="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <Link to="/">Home</Link>
        </div>
    )
}