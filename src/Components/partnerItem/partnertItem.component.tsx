import React from "react";
import './partnerItem.component.css';
import './partnerItemBorder.component.css'

export interface PartnerItemComponentInputs {
    header:string,
    text:string,
    active: boolean
}


export const PartnerItemComponent:React.FC<PartnerItemComponentInputs> = (data:PartnerItemComponentInputs) => {
    const { header, text, active } = data;
    return (
        <div className={`partner-item-component ${active ? "partner-item-component-active" : null}`}>
            <div className="partner-item-header">
                {header}
            </div>
            <div className="partner-item-text">
                {text}
            </div>
            <div id={"partner-b-h-1"} className={`partner-custom-border-horizontal ${active ? "partner-custom-border-horizontal-active" : null}`}></div>
            <div id={"partner-b-h-2"} className={`partner-custom-border-horizontal ${active ? "partner-custom-border-horizontal-active" : null}`}></div>
            <div id={"partner-b-h-3"} className={`partner-custom-border-horizontal ${active ? "partner-custom-border-horizontal-active" : null}`}></div>
            <div id={"partner-b-h-4"} className={`partner-custom-border-horizontal ${active ? "partner-custom-border-horizontal-active" : null}`}></div>
            <div id={"partner-b-v-1"} className={`partner-custom-border-vertical ${active ? "partner-custom-border-vertical-active" : null}`}></div>
            <div id={"partner-b-v-2"} className={`partner-custom-border-vertical ${active ? "partner-custom-border-vertical-active" : null}`}></div>
            <div id={"partner-b-v-3"} className={`partner-custom-border-vertical ${active ? "partner-custom-border-vertical-active" : null}`}></div>
            <div id={"partner-b-v-4"} className={`partner-custom-border-vertical ${active ? "partner-custom-border-vertical-active" : null}`}></div>
        </div>
    )
}