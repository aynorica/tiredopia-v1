import React from "react";
import './contact.page.css';
import {ContactContainer} from "../../Containers/Contact/contact.container";
import {PageTitleComponent} from "../../Components/PageTitle/pageTitle.component";


export const ContactPage:React.FC = () => {
    return (
        <div className="bg-color">
            <PageTitleComponent text={"CONTACT US"}/>
            <ContactContainer />
        </div>
    )
}