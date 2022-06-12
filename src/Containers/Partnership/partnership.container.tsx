import React from "react";
import './partnership.container.css';
import {TitleComponent} from "../../Components/Title/title.component";
import {PartnerDescriptionContainer} from "../PartnerDescription/partnerDescription.container";
import {PartnerItemsContainer} from "../PartnerItems/partnerItems.container";


export const PartnershipContainer:React.FC = () => {
    return (
        <div className="bg-color">
            <div className="partner-container max-size">
                <div className="partner-container-title partner-container-margin">
                    <TitleComponent text={"how we work"}/>
                </div>
                <div>
                    <PartnerDescriptionContainer />
                </div>
                <div className="partner-container-title">
                    <PartnerItemsContainer />
                </div>
            </div>
        </div>
    )
}