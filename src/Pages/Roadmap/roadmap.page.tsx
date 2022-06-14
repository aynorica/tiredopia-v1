import React from "react";
import './roadmap.page.css';
import {RoadmapContainer} from "../../Containers/RoadMap/roadmap.container";
import {PageTitleComponent} from "../../Components/PageTitle/pageTitle.component";


export const RoadmapPage:React.FC = () => {
    return (
        <div className="roadmap-page-container ">
            <PageTitleComponent text={"ROADMAP"}/>
            <RoadmapContainer />
        </div>
    )
}