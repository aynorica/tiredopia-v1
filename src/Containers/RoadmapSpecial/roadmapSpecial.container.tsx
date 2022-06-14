import React from "react";
import './roadmapSpecial.container.css';
import {RoadmapComponent, RoadmapComponentInputs} from "../../Components/Roadmap/roadmap.component";

export interface RoadmapSpecialContainerInput {
    items: RoadmapComponentInputs[],
    doneCount:number
}

export const RoadmapSpecialContainer:React.FC<RoadmapSpecialContainerInput> = (data:RoadmapSpecialContainerInput) => {
    const { items, doneCount } = data;
    const height:number = calculateHeight(items.length)
    return (
        <div className="roadmap-special-container">
            <div className="roadmap-special-line-container">
                <div className="roadmap-special-line" style={{height}}>
                    <div style={{height: `${calculateHeightBasedOnDoneCount(doneCount)}px`}}>

                    </div>
                </div>
                {
                    items.map((item, index) => {
                        return <SpecialBoxComponent header={item.header} listEl={item.listEl} index={index}/>
                    })
                }
            </div>
        </div>
    )
}

const ConnectionLine:React.FC<{top:number, left:number, right:number}> = (data:{top:number, left?:number, right?:number}) => {
    const { top, left, right } = data;
    let boxSide:boolean = false
    let style:any = {};
    style['top'] = `${top}px`;
    // @ts-ignore
    if(left >= 0) {
        style['left'] = `${left}px`;
        boxSide = true
    }
    // @ts-ignore
    if(right >= 0) {
        style['right'] = `${right}px`;
        boxSide = false
    }

    return (
        <div className="connection-line" style={style}>
            <ConnectionBox top={7} side={boxSide}/>
            <svg>
                <polyline points="0,0 108,0"/>
            </svg>
        </div>
    )
}

const ConnectionBox:React.FC<{top:number, side:boolean}> = (data:{top:number, side:boolean}) => {
    const { top, side } = data;
    let style:any = {};
    style['top'] = `${top}px`;
    // @ts-ignore
    if(side) style['right'] = `-1px`;
    else style['left'] = '-8px';
    return (
        <div className="roadmap-connection-box" style={style}>

        </div>
    )
}
export interface SpecialBoxComponentInput extends RoadmapComponentInputs{
    index:number
}
const SpecialBoxComponent:React.FC<SpecialBoxComponentInput> = (data:SpecialBoxComponentInput) => {
    const { header, listEl, index } = data;
    const side:boolean = index % 2 === 0;
    const topOffset:number = index * 170;
    let style:any = {}
    style[`${side ? 'left' : 'right'}`] = '16.15%';
    style['top'] = `${topOffset}px`;
    return <div className="roadmap-special-container-component" style={style}>
        <RoadmapComponent header={data.header} listEl={data.listEl} />
        <ConnectionLine top={88} left={side ? 399 : -1} right={side ? -1 : 392}/>
    </div>
}

const calculateHeight = (elementCount:number):number => {
    return 100 + (170 * elementCount)
}

const calculateHeightBasedOnDoneCount = (doneCount:number) => {
    return ((doneCount - 1) * 170) + 100
}