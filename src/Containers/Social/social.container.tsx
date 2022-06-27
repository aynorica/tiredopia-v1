import React from "react";
import './social.container.css';
import {TwitterLogoSvg} from "../../Assets/Logo/twitter-logo";
import {FacebookLogo} from "../../Assets/Logo/facebook-logo";
import {InstagramLogo} from "../../Assets/Logo/instagram-logo";
import {OpenseaLogo} from "../../Assets/Logo/opensea-logo";
import {DiscordLogo} from "../../Assets/Logo/discord-logo";


export const SocialContainer:React.FC = () => {
    return (
        <div className="social-container">
            <a href={"https://twitter.com/tiredopia"} className="social-container-svg"><TwitterLogoSvg /></a>
            <a href={"#"} className="social-container-svg"><FacebookLogo /></a>
            <a href={"https://www.instagram.com/tiredopia/"} className="social-container-svg"><InstagramLogo /></a>
            <a href={"https://opensea.io/collection/tiredopia"} className="social-container-svg social-container-opensea"><OpenseaLogo /></a>
            <a href={"https://discord.gg/96a6hgSe"} className="social-container-svg"><DiscordLogo /></a>
        </div>
    )
}