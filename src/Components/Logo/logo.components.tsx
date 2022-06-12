import React from "react";
import './logo.component.css';
import logo from '../../Assets/Logo/logo2.png'


export const LogoComponents:React.FC = () => {
    return (
        <a className="logo-component" href="https://tiredopia.com">
            <img alt={"logo"} src={logo}/>
            <h1>TIREDOPIA</h1>
        </a>
    )
}