import React from "react";
import './about.page.css';
import {AboutContainer} from "../../Containers/About/about.container";
import {AboutTeamContainer} from "../../Containers/AboutTeam/aboutTeam.container";
import {PageTitleComponent} from "../../Components/PageTitle/pageTitle.component";


export const AboutPage:React.FC = () => {
    return (
        <div className="bg-color">
            <PageTitleComponent text={"ABOUT US"}/>
            <div className="max-size about-page">
                <AboutContainer main={false} />
                <AboutTeamContainer />
            </div>
        </div>
    )
}