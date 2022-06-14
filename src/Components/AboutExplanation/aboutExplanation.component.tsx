import React from "react";
import './aboutExplanation.component.css';
import './aboutExplainationBorder.component.css';

export interface AboutExplanationComponentInput {
    header:string,
    text:string,
    active: boolean,
    main?:boolean
}

export const AboutExplanationComponent:React.FC<AboutExplanationComponentInput> = (data:AboutExplanationComponentInput) => {
    const { text, header, active, main } = data;
    return (
        <div className={`about-explanation-component ${active ? "about-explanation-component-active" : null} ${main ? "about-explanation-component-main" : null}`}>
            <h5>
                {header}
            </h5>
            <h6>
                {text}
            </h6>
            <div id={"about-b-h-1"} className={`about-custom-border-horizontal ${active ? "about-custom-border-horizontal-active" : null}`}></div>
            <div id={"about-b-h-2"} className={`about-custom-border-horizontal ${active ? "about-custom-border-horizontal-active" : null}`}></div>
            <div id={"about-b-h-3"} className={`about-custom-border-horizontal ${active ? "about-custom-border-horizontal-active" : null}`}></div>
            <div id={"about-b-h-4"} className={`about-custom-border-horizontal ${active ? "about-custom-border-horizontal-active" : null}`}></div>
            <div id={"about-b-v-1"} className={`about-custom-border-vertical ${active ? "about-custom-border-vertical-active" : null}`}></div>
            <div id={"about-b-v-2"} className={`about-custom-border-vertical ${active ? "about-custom-border-vertical-active" : null}`}></div>
            <div id={"about-b-v-3"} className={`about-custom-border-vertical ${active ? "about-custom-border-vertical-active" : null}`}></div>
            <div id={"about-b-v-4"} className={`about-custom-border-vertical ${active ? "about-custom-border-vertical-active" : null}`}></div>
        </div>
    )
}