import React from "react";
import './loading.container.css';
import logo from '../../Assets/Logo/logogradient4.png';


export const LoadingContainer:React.FC = () => {
    return (
        <div className="loading-container">
            <div>

            </div>
            <img src={logo} alt={"logo"}/>
            <p>Loading ...</p>
        </div>
    )
}