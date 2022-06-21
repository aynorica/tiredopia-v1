import React from "react";
import './contact.container.css';
import {ContactDescComponent} from "../../Components/ContactDesc/contactDesc.component";
import {ContactInputContainer} from "../ContactInput/contactInput.container";
import {SpecialBtnComponent} from "../../Components/Buttons/Special Button/specialBtn.component";


export const ContactContainer:React.FC = () => {
    return (
        <div className="contact-container max-size">
            <div>
                <ContactDescComponent />
            </div>
            <div>
                <ContactInputContainer />
            </div>
            <div>
                <SpecialBtnComponent link={''} text={"Send Message"} fill={true} scale={1.2} func={() => {}} />
            </div>
        </div>
    )
}