import React from "react";
import './nftShowcase.component.css';

export interface NftShowcaseComponentInput {
    img: any,
    name: string,
    alt: string
}

export const NftShowcaseComponent:React.FC<NftShowcaseComponentInput> = (data:NftShowcaseComponentInput) => {
    const { img, name, alt } = data;
    return (
        <div className="nft-showcase-component">
            <img src={img} alt={alt}/>
            <div>{name}</div>
        </div>
    )
}