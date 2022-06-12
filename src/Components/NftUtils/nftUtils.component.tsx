import React, {useState} from "react";
import './nftUtils.component.css';

export interface NftUtilsComponentInputs {
    items:NftUtilsComponentInput[],
    selectFunction: any
}


export interface NftUtilsComponentInput {
    id:string,
    text:string
}

export const NftUtilsComponent:React.FC<NftUtilsComponentInputs> = (data:NftUtilsComponentInputs) => {
    const {items, selectFunction} = data;
    const [open, setOpen] = useState(false)
    const [defaultText, setDefaultText] = useState('Sort By')
    return (
        <div
            className="nft-utils-component"
            style={{height: `${open ? calculateOpenSize(items.length) : '42'}px`}}
            onClick={() => setOpen(!open)}
        >
            <div className="nft-utils-component-default">
                {defaultText}
                <NftUtilsArrow />
            </div>
            {
                items.map(item => {
                    const { id, text } = item;
                    return <div id={id} className="nft-utils-component-item" onClick={() => {selectFunction(id);setOpen(false);setDefaultText(text)}}>
                        {
                            text
                        }
                    </div>
                })
            }
        </div>
    )
}

export const NftUtilsArrow:React.FC = () => {
    return (
        <div className="nft-utils-arrow">
            <svg>
                <polyline points="0,0 10,10 20,0"/>
            </svg>
        </div>
    )
}

const calculateOpenSize = (length:number) => {
    return (length * 42) + 42
}