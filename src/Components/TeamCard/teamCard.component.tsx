import React from "react";
import './teamCard.component.css';
import {TwitterLogoSvg} from "../../Assets/Logo/twitter-logo";
import {InstagramLogo} from "../../Assets/Logo/instagram-logo";

export interface TeamCardComponentInput {
    img:string,
    header:string,
    text:string,
    link:string,
    icon_type?:"twitter" | "instagram"
}

export const TeamCardComponent:React.FC<TeamCardComponentInput> = (data:TeamCardComponentInput) => {
    const { header, link, img, text, icon_type } = data;
    return (
        <div className="team-card-component">
            <img alt={"employee"} className="team-card-component-img" src={img}/>
            <div>
                <div className="team-card-component-header">{header}</div>
                <div className="team-card-component-text">{text}</div>
            </div>
            <div className="team-card-component-social">
                <a className="team-card-component-social" href={link}>
                    {
                        icon_type === "instagram" ?
                            <InstagramLogo />
                            :
                            <TwitterLogoSvg />
                    }
                </a>
            </div>
        </div>
    )
}