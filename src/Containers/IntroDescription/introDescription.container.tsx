import React from "react";
import './introDescription.container.css';
import {IntroHeaderComponent} from "../../Components/IntroHeader/introHeader.component";
import {IntroSubHeaderComponent} from "../../Components/IntroSubHeader/introSubHeader.component";
import {IntroDescriptionBtnContainer} from "../IntroDescriptionBtn/introDescriptionBtn.container";


export const IntroDescriptionContainer:React.FC = () => {
    return (
        <div className="intro-description-container">
            <IntroHeaderComponent />
            <IntroSubHeaderComponent />
            <IntroDescriptionBtnContainer />
        </div>
    )
}