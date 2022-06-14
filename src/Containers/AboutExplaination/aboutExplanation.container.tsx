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
                dataForExplanation.map((item, index) => {
                    const { text, header } = item;
                    return <div>
                        <AboutExplanationComponent text={text} header={header} active={index < 1} main={data.main}/>
                    </div>
                })
            }
        </div>
    )
}

const dataForExplanation:AboutExplanationComponentInput[] = [
    {
        header: 'Unique, 1/1 Generated',
        text: 'Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.',
        active: false
    },
    {
        header: '140+ Traits In 16 Categories',
        text: 'Ornare faucibus urna, netus ut. Ac vulputate ornare donec orci sed gravida senectus. Felis quis morbi vivamus est eget sapien magnis quis.',
        active: false
    },
    {
        header: 'Usage Rights Included',
        text: 'Ac, bibendum duis gravida nullam. At amet nibh platea nibh interdum non, egestas bibendum iaculis. Etiam tristique ultricies tristique ullamcorper donec eget odio ut.',
        active: false
    },
]