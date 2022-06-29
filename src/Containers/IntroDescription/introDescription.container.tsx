import React from "react";
import './introDescription.container.css';
import {IntroHeaderComponent} from "../../Components/IntroHeader/introHeader.component";
import {IntroSubHeaderComponent} from "../../Components/IntroSubHeader/introSubHeader.component";
import {IntroDescriptionBtnContainer} from "../IntroDescriptionBtn/introDescriptionBtn.container";


export const IntroDescriptionContainer:React.FC = () => {
    return (
        <div className="intro-description-container">
            <IntroHeaderComponent />
            <IntroSubHeaderComponent text={"A world where all unite to create what's beyond imagination. Get your one way ticket to the land of free."}/>
            <IntroDescriptionBtnContainer />
        </div>
    )
}