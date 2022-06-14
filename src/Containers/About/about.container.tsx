import React, {useEffect, useState} from "react";
import './about.container.css';
import {TitleComponent} from "../../Components/Title/title.component";
import {AboutDescContainer} from "../AboutDescription/aboutDesc.container";
import {AboutExplanationContainer} from "../AboutExplaination/aboutExplanation.container";

export interface AboutContainerInputs {
    main: boolean
}

export const AboutContainer:React.FC<AboutContainerInputs> = (data:AboutContainerInputs) => {
    const { main } = data;
    return (
        <div className="bg-color" >
            <div className={`max-size ${main ? "about-container" : "about-container-page"}`}>
                <div className="about-container-desc">
                    <AboutDescContainer main={main}/>
                </div>
                <div>
                    <AboutExplanationContainer main={main}/>
                </div>
            </div>
        </div>
    )
}
