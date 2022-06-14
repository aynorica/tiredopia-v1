import React, {useState} from "react";
import './faq.component.css';
import './faqBorder.component.css';

export interface FaqComponentInputs {
    question: string,
    description: string,
    active:boolean,
    id?:string
}

export const FaqComponent:React.FC<FaqComponentInputs> = (data:FaqComponentInputs) => {
    const { description, question, id, active } = data;
    const [open, setOpen] = useState(false);
    return (
        <div id={id} className={`faq-component ${open || active ? "faq-component-active" : null}`} onClick={() => {openFaq(open, id);setOpen(!open)}}>
            <h5 className="faq-component-question">
                {question}
            </h5>
            <h6 className="faq-component-description">
                {description}
            </h6>
            <div className={`faq-arrow-container ${open ? "faq-arrow-container-active": null}`}>
                <FaqArrow />
            </div>
            <div id={"faq-b-h-1"} className={`faq-custom-border-horizontal ${open || active ? "faq-custom-border-horizontal-active" : null}`}></div>
            <div id={"faq-b-h-2"} className={`faq-custom-border-horizontal ${open || active ? "faq-custom-border-horizontal-active" : null}`}></div>
            <div id={"faq-b-h-3"} className={`faq-custom-border-horizontal ${open || active ? "faq-custom-border-horizontal-active" : null}`}></div>
            <div id={"faq-b-h-4"} className={`faq-custom-border-horizontal ${open || active ? "faq-custom-border-horizontal-active" : null}`}></div>
            <div id={"faq-b-v-1"} className={`faq-custom-border-vertical ${open || active ? "faq-custom-border-vertical-active" : null}`}></div>
            <div id={"faq-b-v-2"} className={`faq-custom-border-vertical ${open || active ? "faq-custom-border-vertical-active" : null}`}></div>
            <div id={"faq-b-v-3"} className={`faq-custom-border-vertical ${open || active ? "faq-custom-border-vertical-active" : null}`}></div>
            <div id={"faq-b-v-4"} className={`faq-custom-border-vertical ${open || active ? "faq-custom-border-vertical-active" : null}`}></div>
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
    console.log(parent.style)
    // @ts-ignore
    parent.style.height = open ? `${width > 500 ? '100px' : '70px'}` : '200px';
}