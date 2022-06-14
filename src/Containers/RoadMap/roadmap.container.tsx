import React from "react";
import './roadmap.container.css';
import {RoadmapComponentInputs, RoadmapDescComponent} from "../../Components/Roadmap/roadmap.component";
import {RoadmapSpecialContainer} from "../RoadmapSpecial/roadmapSpecial.container";
import {TitleComponent, TitleSmallComponent} from "../../Components/Title/title.component";


export const RoadmapContainer:React.FC = () => {
    return (
        <div className="bg-roadmap">
            <div className="roadmap-container max-size">
                <div className="roadmap-container-title">
                    <TitleSmallComponent text={"ROADMAP"} />
                </div>
                <div className="roadmap-container-desc">
                    <RoadmapDescComponent />
                </div>
                <RoadmapSpecialContainer items={items} doneCount={1}/>
            </div>
        </div>
    )
}

const items:RoadmapComponentInputs[] = [
    {
        header: 'Q2 2022',
        listEl: ["Aenean tempor", "Fusce arcu maecenas", "Malesuada felis sem elementum", "Risus eu metus"]
    },
    {
        header: 'Q1 2022',
        listEl: ["Aenean tempor", "Fusce arcu maecenas", "Malesuada felis sem elementum", "Risus eu metus"]
    },
    {
        header: 'Q4 2022',
        listEl: ["Aenean tempor", "Fusce arcu maecenas", "Malesuada felis sem elementum", "Risus eu metus"]
    },
    {
        header: 'Q3 2022',
        listEl: ["Aenean tempor", "Fusce arcu maecenas", "Malesuada felis sem elementum", "Risus eu metus"]
    },
]