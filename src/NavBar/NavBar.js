import React from "react";
import './NavBar.css';

export function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__item"><a href="./index.html">Home</a></li>
                <li className="nav__list__item"><a href="./work.html">About</a></li>
                <li className="nav__list__item"><a href="./work.html">Skills</a></li>
                <li className="nav__list__item"><a href="./about.html">Work</a></li>
                <li className="nav__list__item"><a href="./contact.html">Contact</a></li>
                <li className="nav__list__item nav__list__item--socials">
                    <a href="https://github.com/parsasaeedi">
                        <img className="nav__list__item--socials__img" src = "./img/github_icon.svg" alt="Github Icon"/>
                    </a>
                </li>
                <li className="nav__list__item nav__list__item--socials">
                    <a href="https://www.linkedin.com/in/parsasaeedi/">
                        <img class="nav__list__item--socials__img" src = "./img/linkedin_icon.svg" alt="LinkedIn Icon"/>
                    </a>
                </li>
            </ul>
            <ul>
                
            </ul>
        </nav>
    )
}