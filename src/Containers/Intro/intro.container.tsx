import React, {useState} from "react";
import './intro.container.css';
import {IntroDescriptionContainer} from "../IntroDescription/introDescription.container";
import {IntroPicComponent} from "../../Components/IntroPic/introPic.component";

export const IntroContainer:React.FC = () => {
    const [size, setSize] = useState(window.innerHeight);
    const setting = () => setSize(window.innerHeight);
    window.addEventListener("resize", setting);
    return (
        <div className="intro-container max-size" style={{minHeight: `${size - 350}px`}}>
            <div className="intro-item intro-desc-item">
                <IntroDescriptionContainer />
            </div>
            <div className="intro-item intro-pic-item">
                <IntroPicComponent />
            </div>
        </div>
    )
}