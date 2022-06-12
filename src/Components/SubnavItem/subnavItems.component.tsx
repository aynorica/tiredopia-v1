import React from "react";
import './subnavItem.component.css';
import {SubnavItemsInputsModel} from "../../Containers/Subnav/subnav.container";
import {Link} from "react-router-dom";



export const SubnavItemsComponent:React.FC<SubnavItemsInputsModel> = (data:SubnavItemsInputsModel) => {
    const { text, link, setUri, active } = data;
    return (
        <div className={`subnav-component ${active ? 'subnav-component-hovered' : null}`} onClick={() => setUri(link)}>
            <Link to={link}>
                {text}
            </Link>
        </div>
    )
}