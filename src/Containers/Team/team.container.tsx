import React from "react";
import './team.container.css';
import {TitleComponent} from "../../Components/Title/title.component";
import {TeamDescriptionContainer} from "../TeamDescription/teamDescription.container";
import {TeamCarouselContainer} from "../TeamCarousel/teamCarousel.container";
import {TeamCardComponentInput} from "../../Components/TeamCard/teamCard.component";

export const TeamContainer:React.FC = () => {
    return (
        <div className="bg-team-color">
            <div className="team-container max-size">
                <div className="team-container-title">
                    <TitleComponent text={"OUR TEAM"} />
                </div>
                <div>
                    <TeamDescriptionContainer />
                </div>
                <div className="team-container-carousel">
                    <TeamCarouselContainer items={teams}/>
                </div>
            </div>
        </div>
    )
}

export const teams:TeamCardComponentInput[] = [
    {
        text:'Co-founder & COO',
        img: 'https://cyboxhtml.surielementor.com/assets/images/common/team6.png',
        link: '#',
        header: 'Esther Howard'
    },
    {
        text:'Blockchain Developer',
        img: 'https://cyboxhtml.surielementor.com/assets/images/common/team7.png',
        link: '#',
        header: 'Devon Lane'
    },
    {
        text:'Backend Engineer',
        img: 'https://cyboxhtml.surielementor.com/assets/images/common/team8.png',
        link: '#',
        header: 'Ralph Edwards'
    },
    {
        text:'Co-founder & COO',
        img: 'https://cyboxhtml.surielementor.com/assets/images/common/team9.png',
        link: '#',
        header: 'Esther Howard'
    },
]