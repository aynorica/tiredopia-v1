import React from "react";
import './partnerItem.component.css';

export interface PartnerItemComponentInputs {
    header:string,
    text:string
}


export const PartnerItemComponent:React.FC<PartnerItemComponentInputs> = (data:PartnerItemComponentInputs) => {
    const { header, text } = data;
    return (
        <div className="partner-item-component">
            <div className="partner-item-header">
                {header}
            </div>
            <div className="partner-item-text">
                {text}
            </div>
            <svg >
                <polyline points="0,230 0,0 350,0"/>
                <polyline points="350,0 350,230 0,230"/>
            </svg>
        </div>
    )
}