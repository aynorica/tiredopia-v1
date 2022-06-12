import React from "react";
import './introPic.component.css';
import picture from '../../Assets/SpecialNFT/character3 (1).png';


export const IntroPicComponent:React.FC = () => {
    return <div className="introPic-component load-up-animation anim-delay-4">
        <img src={picture} alt={'scpecial'}/>
    </div>
}