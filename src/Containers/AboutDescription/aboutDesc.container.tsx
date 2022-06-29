import React from "react";
import './aboutDesc.container.css';
import {AboutHeaderComponent} from "../../Components/AboutHeader/aboutHeader.component";
import {IntroSubHeaderComponent} from "../../Components/IntroSubHeader/introSubHeader.component";
import {SpecialBtnComponent} from "../../Components/Buttons/Special Button/specialBtn.component";
import {TitleComponent, TitleSmallComponent} from "../../Components/Title/title.component";
import {AboutContainerInputs} from "../About/about.container";

export const AboutDescContainer:React.FC<AboutContainerInputs> = (data:AboutContainerInputs) => {
    const { main } = data;
    return (
        <div className="about-desc-container">
            <div className={`about-desc-title ${main ? null : "about-center"}`}>
                <TitleSmallComponent text={"ABOUT US"} />
            </div>
            <div className={`about-desc-container-center ${main ? null : "about-center"}`}>
                <AboutHeaderComponent />
            </div>
            <div className={`about-desc-container-center ${main ? null : "about-center"}`}>
                <IntroSubHeaderComponent text={"Growing up in a restricted community, feeling limited under circumstances was always a problem for us. Leading to us wanting to create a world where people would not be limited to conditions. A world where people can have their own land and create freely without any limitations. "}/>
            </div>
            <div className={`about-desc-container-btn about-desc-container-center ${main ? null : "about-btn-hidden"}`}>
                <SpecialBtnComponent link={"https://opensea.io/collection/tiredopia"} text={"Buy one"} fill={false} scale={1.1} />
            </div>
        </div>
    )
}