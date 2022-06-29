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
        header: 'Q1 :',
        listEl: ["Designing characters", "Smart Conrtact", "Minting first 2,000"]
    },
    {
        header: 'Q2 :',
        listEl: ["Minting the final 8,000", "Smart contract", "The world meets Tiredopia"]
    },
    {
        header: 'Q3 :',
        listEl: ["Lands are created for holders", "Sell all characters", "Creating land for the NFT holders. "]
    },
    {
        header: 'Q4 :',
        listEl: ["Launch CYBERDOM", "Holders get their own lands through their characters.", "Airdrop to Tiredopia holders"]
    },
]