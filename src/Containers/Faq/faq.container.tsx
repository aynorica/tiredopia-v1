import React from "react";
import './faq.container.css';
import {TitleComponent, TitleSmallComponent} from "../../Components/Title/title.component";
import {FaqIntroComponent} from "../../Components/FaqIntro/faqIntro.component";
import {FaqComponent, FaqComponentInputs} from "../../Components/Faq/faq.component";


export const FaqContainer:React.FC = () => {
    return (
        <div className="bg-color">
            <div className="max-size faq-container">
                <div className="faq-container-center">
                    <div style={{display: 'flex',justifyContent:'center'}}>
                        <TitleSmallComponent text={"FAQS"} />
                    </div>
                    <FaqIntroComponent />
                </div>
                <div className="faq-container-center">
                    <div className="faq-component-container">
                        {
                            faqComponentsData.map((item, index) => {
                                const { question, description, active } = item;
                                return <FaqComponent question={question} description={description} id={`faq-element-${index}`} active={active}/>
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
        description: "Non-fungible token. Right, sorry. “Non-fungible” more or less means that it’s unique and can’t be replaced with something else. For example, a bitcoin is fungible — trade one for another bitcoin, and you’ll have exactly the same thing.A one-of-a-kind trading card, however, is non-fungible. If you traded it for a different card, you’d have something completely different.",
        active: true
    },
    {
        question: "How To Access Tiredopia Collection?",
        description: "The collection can be easily accessed, purchased and resold through Opensea platform. You can also check out the collectibles on our website. After purchase you can easily sell them on the platform of your choice.",
        active: false
    },
    {
        question: "Why Tiredopia's NFTs are valuable?",
        description: "Tiredopia collections allows it’s holders to access our next project, Cyberdom. Here users will have their own lands where they can design, create and build, Also, Tiredopia offers variety of digital collectibles, the characters have been uniquely designed to portray different",
        active: false
    },
]