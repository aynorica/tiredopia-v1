import React from "react";
import './introSubHeader.component.css';

export interface IntroSubHeaderComponentInput {
    text: string
}

export const IntroSubHeaderComponent:React.FC<IntroSubHeaderComponentInput> = (data:IntroSubHeaderComponentInput) => {
    const { text } = data;
    return (
        <h2 className="intro-sub-header-component load-up-animation anim-delay-1">
            {text}
        </h2>
    )
}