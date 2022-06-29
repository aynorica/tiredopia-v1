import React,{Suspense} from "react";
import './nftShowcase.component.css';
import {LoadingContainer} from "../../Containers/Loading/loading.container";

export interface NftShowcaseComponentInput {
    img: any,
    name: string,
    alt: string
}

export const NftShowcaseComponent:React.FC<NftShowcaseComponentInput> = (data:NftShowcaseComponentInput) => {
    const { img, name, alt } = data;
    return (
        <Suspense fallback={<LoadingContainer />}>
            <div className="nft-showcase-component">
                <img src={img} alt={alt}/>
                <div>{name}</div>
            </div>
        </Suspense>
    )
}