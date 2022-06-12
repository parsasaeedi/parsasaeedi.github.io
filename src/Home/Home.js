import React from "react";
import { NavBar } from "../NavBar/";
import "./main";
import { RotatingText } from "./RotatingText/";


export function Home() {
    return (
        <main>
            <div className="cursor" id="cursor"></div>
            <div className="header">
                <div id="particles-js"></div>

                <NavBar />
            
                <div className="header__content">
                    <h5 className="hi-my-name-is">HI, MY NAME IS</h5>
                    <div className="my-name-wrapper">
                        <h1 className="my-name">parsa.</h1>
                    </div>
                    <RotatingText />
                </div>

            </div>
            <script src="./main.js"></script>
        </main>
    )
}