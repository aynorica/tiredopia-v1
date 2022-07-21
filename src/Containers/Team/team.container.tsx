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
        text:'Full-Stack Developer',
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/8c93d822-9a00-42f2-bcdd-a5322c837200/public',
        link: 'https://twitter.com/Amir63247052',
        header: 'Amir Deilami',
        icon_type: "twitter"
    },
    {
        text:'Business Developer',
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/a0fd86e8-5037-4ac1-b14b-6d412ea89700/public',
        link: 'https://twitter.com/EdMehran',
        header: 'Mehran Davatgar',
        icon_type: "twitter"
    },
    {
        text:'Business Developer',
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/6bd9935d-e5f8-4cbd-5153-60ddea896a00/public',
        link: 'https://twitter.com/tahajn1',
        header: 'Taha Jafarnejad',
        icon_type: "twitter"
    },
    {
        text:'Artist',
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/825ae2f3-1988-4c99-0a82-f88be0aee000/public',
        link: 'https://www.instagram.com/lukachikurinko/',
        header: 'Fatemeh Deilami',
        icon_type: "instagram"
    },
]