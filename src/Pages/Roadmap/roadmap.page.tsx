import React from "react";
import './roadmap.page.css';
import {RoadmapContainer} from "../../Containers/RoadMap/roadmap.container";


export const RoadmapPage:React.FC = () => {
    return (
        <div className="roadmap-page-container ">
            <RoadmapContainer />
        </div>
    )
}