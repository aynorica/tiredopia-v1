import React from 'react';
import './contactInput.container.css';
import {NftSearchComponent} from "../../Components/NftSearch/nftSearch.component";
import {TextAreaComponent} from "../../Components/ContactTextArea/contactTextArea.component";

export const ContactInputContainer:React.FC = () => {
    return (
        <div className="contact-input-container">
            <div className="contact-input-item">
                <NftSearchComponent searchFunction={() => {}} placeholder={"Name"} icon={false}/>
            </div>
            <div className="contact-input-item">
                <NftSearchComponent searchFunction={() => {}} placeholder={"Email Address"} icon={false}/>
            </div>
            <div className="contact-input-item">
                <NftSearchComponent searchFunction={() => {}} placeholder={"Phone (optional)"} icon={false}/>
            </div>
            <div className="contact-input-item">
                <TextAreaComponent placeholder={"How can we help ?"} searchFunction={() => {}} />
            </div>
        </div>
    )
}