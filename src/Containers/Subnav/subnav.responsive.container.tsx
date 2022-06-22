import React, {useState} from "react";
import './subnav.container.css';
import {subNavItemsDetails} from "./subnav.container";
import {SubnavItemsComponent} from "../../Components/SubnavItem/subnavItems.component";


export const SubnavResponsiveContainer:React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [uri, setUri] = useState(window.location.pathname);
    return (
        <div className="subnav-responsive-container">
            <div className="subnav-responsive-container-svg" onClick={() => setClicked(!clicked)}>
                <svg className={`subnav-responsive-svg-component line-top ${clicked ? 'line-rotate-clockwise' : null}`}>
                    <line className="" x1="10" y1="0" x2="40" y2="0"/>
                </svg>
                <svg className={`subnav-responsive-svg-component line-mid ${clicked ? 'line-hidden' : null}`}>
                    <line className="" x1="10" y1="0" x2="40" y2="0"/>
                </svg>
                <svg className={`subnav-responsive-svg-component line-bottom ${clicked ? 'line-rotate-non-clockwise' : null}`}>
                    <line className="" x1="10" y1="0" x2="40" y2="0"/>
                </svg>
            </div>
            <div className={`subnav-responsive-items-container ${clicked ? "height-expanse" : null}`}>
                {
                    subNavItemsDetails.map(item => {
                        const { text, link } = item;
                        let active:boolean = uri === link;
                        if(uri === '/' && link ==='/home') active = true
                        return <div>
                            <SubnavItemsComponent text={text} link={link} setUri={setUri} active={active}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
