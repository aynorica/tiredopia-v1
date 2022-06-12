import React from "react";
import './introDescriptionBtn.container.css';
import {SpecialBtnComponent} from "../../Components/Buttons/Special Button/specialBtn.component";

export const IntroDescriptionBtnContainer:React.FC = () => {
    return (
        <div className="intro-description-btn-container load-up-animation anim-delay-2">
            <SpecialBtnComponent link={"#"} text={"connect wallet"} fill={true} scale={1}/>
            <SpecialBtnComponent link={"#"} text={"watch trailer"} fill={false} scale={1}/>
        </div>
    )
}