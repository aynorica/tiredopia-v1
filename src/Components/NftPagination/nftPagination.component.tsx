import React, {useState} from "react";
import './nftPagination.component.css';
import {ImageRequest} from "../../Models/image.request";

export interface NftPaginationComponentInput {
    func: any,
    skip: number
}
export const NftPaginationComponent:React.FC<NftPaginationComponentInput> = (data:NftPaginationComponentInput) => {
    const { skip, func } = data;
    const [num, setNum] = useState(1);

    return (
        <div className="nft-pagination-component">
            <div onClick={() => {
                func(calculateSkip(skip, false))
                if(num > 1) setNum(num-1);
            }}>
                <Arrow rotate={true}/>
            </div>
            <div>
                <input type={"number"} min={1} max={100} defaultValue={num} value={num} onChange={(e) => func(calculateWithChange(+e.target.value))}/>
            </div>
            <div onClick={() => {
                func(calculateSkip(skip, true))
                if(num < 100)setNum(num+1)
            }}>
                <Arrow rotate={false}/>
            </div>
        </div>
    )
}

export const Arrow:React.FC<{rotate:boolean}> = (data:{rotate:boolean}) => {
    const { rotate } = data;
    return (
        <>
        {
            rotate ?
                <svg>
                    <polyline points={"30,0 0,15"} />
                    <polyline points={"0,15 30,30"}/>
                </svg>
                :
                <svg>
                    <polyline points={"0,0 30,15"} />
                    <polyline points={"30,15 0,30"}/>
                </svg>
        }
        </>
    )
}

const calculateSkip = (skip:number, side:boolean) => {
    const newSkip:number = 0;
    if(side) {
        return skip + 20 > 1980 ? 0 : skip + 20;
    }else {
        return skip - 20 < 0 ? 0 : skip - 20;
    }
}

const calculateWithChange = (skip:number) => {
    return (skip - 1) * 20
}

