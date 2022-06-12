import React from "react";
import './subscription.container.css';
import {NormalInput} from "../../Components/Inputs/normalInput";
import {SpecialBtnComponent} from "../../Components/Buttons/Special Button/specialBtn.component";


export const SubscriptionContainer:React.FC = () => {
    return (
        <div className="subscription-container">
            <div className="subscription-container-input">
                <NormalInput />
            </div>
            <SpecialBtnComponent link={"#"} text={"Subscribe"} fill={true} scale={1.2} />
        </div>
    )
}