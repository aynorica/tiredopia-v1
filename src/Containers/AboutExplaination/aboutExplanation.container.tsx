import React from "react";
import './aboutExplanation.container.css';
import {
    AboutExplanationComponent,
    AboutExplanationComponentInput
} from "../../Components/AboutExplanation/aboutExplanation.component";
import {AboutContainerInputs} from "../About/about.container";


export const AboutExplanationContainer:React.FC<AboutContainerInputs> = (data:AboutContainerInputs) => {
    return (
        <div className="about-explanation-container">
            {
                dataForExplanation.map((item) => {
                    const { text, header, active } = item;
                    return <div>
                        <AboutExplanationComponent text={text} header={header} active={active} main={data.main}/>
                    </div>
                })
            }
        </div>
    )
}

const dataForExplanation:AboutExplanationComponentInput[] = [
    {
        header: 'What is TIREDOPIA',
        text: 'Tiredopia is a collection of uniquely generated characters. 10,000 collectibles are currently accessible through Opensea. Every character is specially designed to match the current dynamic of our world. ',
        active: true
    },
    {
        header: '10,000 digital collectibles',
        text: 'Tiredopia offers variety of digital collectibles, the characters have been uniquely designed to portray different ',
        active: false
    },
    {
        header: 'What’s next',
        text: 'Tiredopia collections allows it’s holders to access our next project, Cyberdom. Here users will have their own lands where they can design, create and build.',
        active: false
    },
]