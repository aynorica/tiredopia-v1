import React from "react";
import './faq.container.css';
import {TitleComponent} from "../../Components/Title/title.component";
import {FaqIntroComponent} from "../../Components/FaqIntro/faqIntro.component";
import {FaqComponent, FaqComponentInputs} from "../../Components/Faq/faq.component";


export const FaqContainer:React.FC = () => {
    return (
        <div className="bg-color">
            <div className="max-size faq-container">
                <div className="faq-container-center faq-container-title">
                    <TitleComponent text={'FAQ'}/>
                </div>
                <div className="faq-container-center">
                    <FaqIntroComponent />
                </div>
                <div className="faq-container-center">
                    <div className="faq-component-container">
                        {
                            faqComponentsData.map((item, index) => {
                                const { question, description } = item;
                                return <FaqComponent question={question} description={description} id={`faq-element-${index}`}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const faqComponentsData:FaqComponentInputs[] = [
    {
        question: "What Are The NFTs?",
        description: "Urna vitae erat et lacus, S Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu. Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu. Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu."
    },
    {
        question: "How Do I Get NFTs?",
        description: "Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu."
    },
    {
        question: "How Can We Buy Your NFTs?",
        description: "Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu."
    },
    {
        question: "What Are The NFTs?",
        description: "Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu."
    },
]