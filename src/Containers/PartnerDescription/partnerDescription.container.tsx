import React from "react";
import './partnerDescription.container.css';
import {
    PartnerDescriptionHeader,
    PartnerDescriptionSubHeader
} from "../../Components/PartnerDescription/partnerDescription.component";


export const PartnerDescriptionContainer:React.FC = () => {
    return (
        <div className="partner-desc-container">
            <PartnerDescriptionHeader />
            <PartnerDescriptionSubHeader />
        </div>
    )
}