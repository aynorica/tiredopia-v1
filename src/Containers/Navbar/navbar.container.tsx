import React, {useCallback, useState} from 'react';
import './navbar.container.css';
import {LogoComponents} from "../../Components/Logo/logo.components";
import {SubnavContainer} from "../Subnav/subnav.container";
import {SpecialBtnComponent} from "../../Components/Buttons/Special Button/specialBtn.component";
import {TwitterLogoSvg} from "../../Assets/Logo/twitter-logo";
import {SubnavResponsiveContainer} from "../Subnav/subnav.responsive.container";

export const NavbarContainer:React.FC = () => {
    const [scroll, setScroll] = useState(false);
    const [clicked, setClicked] = useState(false);
    const setting = () => {
        if(window.scrollY >= 450) {
            setScroll(true)
        }
        else if(window.scrollY < 450) {
            setScroll(false)
        }
        setClicked(false)
    }
    window.addEventListener("scroll", setting);
    return (
        <div className={`nav-wrapper nav-wrapper-position ${scroll ? "nav-wrapper-bg load-the-animation" : null}`} style={{height: clicked ? '381px' : '110px'}}>
            <div className={`nav-container max-size`}>
                <div className="nav-item nav-item-logo">
                    <LogoComponents />
                </div>
                <div className="nav-item-hidden nav-item nav-item-center">
                    <SubnavContainer />
                </div>
                <div className="nav-item-social nav-item nav-item-right">
                    <SpecialBtnComponent link={"https://opensea.io/collection/tiredopia"} text={"Buy one"} fill={false} scale={1} />
                </div>
                <div className="nav-item-subnav-responsive">
                    <SubnavResponsiveContainer clicked={clicked} setClicked={setClicked}/>
                </div>
            </div>
        </div>
    )

}

