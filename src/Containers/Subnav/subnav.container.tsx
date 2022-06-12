import React, {useState} from "react";
import './subnav.container.css';
import {SubnavItemsComponent} from "../../Components/SubnavItem/subnavItems.component";


export const SubnavContainer:React.FC = () => {
    const [uri, setUri] = useState(window.location.pathname);
    return (
        <div className="subnav-container">
            {
                subNavItemsDetails.map(item => {
                    const { text, link } = item;
                    let active:boolean = uri === link;
                    if(uri === '/' && link ==='/home') active = true
                    return <SubnavItemsComponent text={text} link={link} setUri={setUri} active={active}/>
                })
            }
        </div>
    )
}

export const subNavItemsDetails:SubnavItemsInputsModel[] = [
    {
        link:"/home",
        text: "home",
        setUri: null,
        active:false
    },
    {
        link:"/about",
        text: "about",
        setUri: null,
        active:false
    },
    {
        link:"/road-map",
        text: "road map",
        setUri: null,
        active:false
    },
    {
        link:"/nft",
        text: "nft",
        setUri: null,
        active:false
    },
    {
        link:"/contact",
        text: "contact",
        setUri: null,
        active:false
    }
]

export interface SubnavItemsInputsModel {
    link: string,
    text: string,
    setUri:any,
    active:boolean
}