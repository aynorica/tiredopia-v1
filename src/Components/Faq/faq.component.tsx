import React, {useState} from "react";
import './faq.component.css';

export interface FaqComponentInputs {
    question: string,
    description: string,
    id?:string
}

export const FaqComponent:React.FC<FaqComponentInputs> = (data:FaqComponentInputs) => {
    const { description, question, id } = data;
    const [open, setOpen] = useState(false);
    return (
        <div id={id} className="faq-component" onClick={() => {openFaq(open, id);setOpen(!open)}}>
            <h5 className="faq-component-question">
                {question}
            </h5>
            <h6 className="faq-component-description">
                {description}
            </h6>
            <svg className="faq-component-cover faq-component-cover-740">
                <polyline points="0,100 0,0 740,0"/>
                <polyline points="740,0 740,100 0,100"/>
            </svg>
            <svg className="faq-component-cover faq-component-cover-500">
                <polyline points="0,100 0,0 500,0"/>
                <polyline points="500,0 500,100 0,100"/>
            </svg>
            <svg className="faq-component-cover faq-component-cover-350">
                <polyline points="0,70 0,0 350,0"/>
                <polyline points="350,0 350,70 0,70"/>
            </svg>
            <div className="faq-arrow-container">
                <FaqArrow />
            </div>
        </div>
    )
}

const FaqArrow:React.FC = () => {
    return (
        <svg className="faq-component-arrow">
            <polyline points="0,0 12,10 24,0"/>
        </svg>
    )
}

const openFaq = (open:boolean, id?:string) => {
    const width:number = +window.innerWidth;
    // @ts-ignore
    const parent = document.getElementById(id);
    // @ts-ignore
    parent.style.height = open ? `${width > 800 ? '100px' : '70px'}` : '200px';
    // @ts-ignore
    parent.style.border = open ? null : '2px solid #94daff';
    // @ts-ignore
    if(parent.children.length && parent.children.length > 0) {
        // @ts-ignore
        const child = Object.values(parent.children).filter(item => item.classList[0] === 'faq-component-cover' || item.classList[0] === 'faq-arrow-container');
        // @ts-ignore
        child[0].style.stroke = open ? '#94daff' : 'rgba(0,0,0,0)';
        // @ts-ignore
        child[0].style.transition = open ? '0.3s ease-in-out' : 'null';
        // @ts-ignore
        child[width > 800 ? 1:2].style.transform = open ? 'rotate(0)' : 'rotate(180deg)';
        // @ts-ignore
        child[width > 800 ? 1:2].style.top = open ? '40px' : '50px';
    }
}