import React from "react";
import './aboutTeam.container.css';
import {teams} from "../Team/team.container";
import {TeamCardComponent} from "../../Components/TeamCard/teamCard.component";
import {TitleComponent, TitleSmallComponent} from "../../Components/Title/title.component";


export const AboutTeamContainer:React.FC = () => {
    return (
        <div className="about-team-container">
            <div className="about-team-title">
                <TitleSmallComponent text={"OUR TEAM"}/>
            </div>
            <div className="about-team-title">
                <TitleComponent text={"MEET OUR TEAM"}/>
            </div>
            {
                teams.map(member => {
                    const { header, img, link, text } = member;
                    return <div>
                        <TeamCardComponent img={img} header={header} text={text} link={link} />
                    </div>
                })
            }
        </div>
    )
}