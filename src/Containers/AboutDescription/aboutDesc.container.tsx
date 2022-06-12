import React from "react";
import './aboutDesc.container.css';
import {AboutHeaderComponent} from "../../Components/AboutHeader/aboutHeader.component";
import {IntroSubHeaderComponent} from "../../Components/IntroSubHeader/introSubHeader.component";
import {SpecialBtnComponent} from "../../Components/Buttons/Special Button/specialBtn.component";

export const AboutDescContainer:React.FC = () => {
    return (
        <div className="about-desc-container">
            <div className="about-desc-container-center">
                <AboutHeaderComponent />
            </div>
            <div className="about-desc-container-center">
                <IntroSubHeaderComponent />
            </div>
            <div className="about-desc-container-btn about-desc-container-center">
                <SpecialBtnComponent link={"#"} text={"Buy one"} fill={false} scale={1.1} />
            </div>
        </div>
    )
}