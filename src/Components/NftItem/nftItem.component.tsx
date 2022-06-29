import React, {useState} from "react";
import './nftItem.component.css';
import {NftDetailsComponent} from "../NftDetails/nftDetails.component";
import {ImageResponse} from "../../Models/image.response";

export interface NftItemComponentInput {
    items:ImageResponse
}


export const NftItemComponent:React.FC<NftItemComponentInput> = (data:NftItemComponentInput) => {
    const [expanse, setExpanse] = useState(false);
    const { items } = data;
    const {
        name,
        image,
        attributes,
    } = items;
    return (
        <div id={name} className="nft-item-component" onClick={() => {onExpansion(name, expanse);setExpanse(!expanse)}}>
            <div className="nft-item-component-brief">
                <img src={image}/>
                <h3 className="nft-item-component-header">{name}</h3>
                <h5 className="nft-item-component-persona">Persona : {attributes.filter(item => item.trait_type === 'personality')[0].value}</h5>
            </div>
            <div id={`${name}-sub-element`} className="nft-details-container nft-item-component-hidden">
                <NftDetailsComponent items={items}/>
            </div>
        </div>
    )
}

const onExpansion = (id:string, expansion:boolean) => {
    const mainEl = document.getElementById(id);
    const otherEl = document.getElementById(`${id}-sub-element`);
    // @ts-ignore
    mainEl.style.gridColumn = expansion ? 'span 1' : 'span 4';
    // @ts-ignore
    mainEl.style.width = expansion ? '310px' : '1400px';
    // @ts-ignore
    otherEl.style.display = expansion ? 'none' : 'block';
}

export interface NftItemComponentModel {
    "name": string,
    "description": string,
    "file_url": string,
    "custom_fields": {
        "dna": string,
        "edition": number,
        "date": number
    },
    "external_url": string,
    "attributes": {
        "trait_type": string,
        "value": string
    }[],
    "image": string
}