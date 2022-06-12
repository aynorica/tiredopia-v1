import React from "react";
import './about.page.css';
import {AboutContainer} from "../../Containers/About/about.container";
import {AboutTeamContainer} from "../../Containers/AboutTeam/aboutTeam.container";


export const AboutPage:React.FC = () => {
    return (
        <div className="bg-color">
            <div className="max-size about-page">
                <AboutContainer main={true} />
                <AboutTeamContainer />
            </div>
        </div>
    )
}