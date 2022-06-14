import React from "react";
import './roadmap.component.css';

export interface RoadmapComponentInputs {
    header:string,
    listEl: string[]
}

export const RoadmapComponent:React.FC<RoadmapComponentInputs> = (data:RoadmapComponentInputs) => {
    const { header, listEl } = data;
    return (
        <div className="roadmap-component">
            <svg className="roadmap-component-box roadmap-component-box-400">
                <polyline points="200,200 0,200 0,0 200,0"/>
                <polyline points="200,0 400,0 400,200 200,200"/>
            </svg>
            <svg className="roadmap-component-box roadmap-component-box-350">
                <polyline points="200,200 0,200 0,0 200,0"/>
                <polyline points="200,0 350,0 350,200 200,200"/>
            </svg>
            <div className="roadmap-component-header">
                {header}
            </div>
            <ul className="roadmap-component-list">
                {
                    listEl.map(item => {
                        return <li>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export const RoadmapDescComponent:React.FC = () => {
    return (
        <div className="roadmap-desc-component">
            TIREDOPIA TIMELINE
        </div>
    )
}