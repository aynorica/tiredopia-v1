import React, {useState} from "react";
import './teamDescription.container.css';
import {
    TeamDescriptionBtn,
    TeamDescriptionHeader,
    TeamDescriptionSubHeader, TeamDescriptionText
} from "../../Components/TeamDescription/teamDescription.component";


export const TeamDescriptionContainer:React.FC = () => {
    const [active, setActive] = useState(true)
    return (
        <div className="team-desc-container">
            <div className="team-desc-container-header"><TeamDescriptionHeader /></div>
            <div className="team-desc-container-sub-header"><TeamDescriptionSubHeader/></div>
            <div className="team-desc-container-text"><TeamDescriptionText /></div>
            <div className="team-desc-container-buttons">
                {/*<div className="team-desc-buttons-margin" onClick={() => setActive(true)}>*/}
                {/*    <TeamDescriptionBtn direction={false} active={active}/>*/}
                {/*</div>*/}
                {/*<div onClick={() => setActive(false)}>*/}
                {/*    <TeamDescriptionBtn direction={true} active={!active}/>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}