import React from "react";
import './partnerDescription.container.css';
import {
    PartnerDescriptionHeader,
    PartnerDescriptionSubHeader
} from "../../Components/PartnerDescription/partnerDescription.component";
import {TitleSmallComponent} from "../../Components/Title/title.component";


export const PartnerDescriptionContainer:React.FC = () => {
    return (
        <div className="partner-desc-container">
            <TitleSmallComponent text={"how we work"}/>
            <PartnerDescriptionHeader />
            <PartnerDescriptionSubHeader />
        </div>
    )
}