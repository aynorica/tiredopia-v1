import React from "react";
import './aboutExplanation.component.css';

export interface AboutExplanationComponentInput {
    header:string,
    text:string
}

export const AboutExplanationComponent:React.FC<AboutExplanationComponentInput> = (data:AboutExplanationComponentInput) => {
    const { text, header } = data;
    return (
        <div className="about-explanation-component">
            <h5>
                {header}
            </h5>
            <h6>
                {text}
            </h6>
            <svg className="about-explanation-component-width-740">
                <polyline points="0,170 0,0 740,0"/>
                <polyline points="740,0 740,170 0,170"/>
            </svg>
            <svg className="about-explanation-component-width-500">
                <polyline points="0,200 0,0 500,0"/>
                <polyline points="500,0 500,200 0,200"/>
            </svg>
            <svg className="about-explanation-component-width-350">
                <polyline points="0,150 0,0 350,0"/>
                <polyline points="350,0 350,150 0,150"/>
            </svg>
        </div>
    )
}