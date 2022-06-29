import React from "react";
import './nftDetails.component.css';
import {NftItemComponentModel} from "../NftItem/nftItem.component";
import {ImageResponse} from "../../Models/image.response";

export interface NftDetailsComponentInput {
    items:ImageResponse
}
export const NftDetailsComponent:React.FC<NftDetailsComponentInput> = (data:NftDetailsComponentInput) => {
    const {
        attributes, name, image, file_url, external_url, description, dna, date
    } = data.items;
    return (
        <div className="nft-details-component">
            <div className="nft-details-component-attributes">
                <div className="nft-details-component-attributes-title">Attributes:</div>
                <ul>
                    {
                        attributes.map(attribute => {
                            if(attribute.value !== 'Empty') {
                                return <li className="nft-details-attribute">
                                    <span className="trait">{attribute.trait_type}</span>  <span className="trait-value">{attribute.value}</span>
                                </li>
                            }else return  null
                        })
                    }
                </ul>
            </div>
            <div className="nft-details-component-others">
                <div className="nft-details-component-attributes-title">Details:</div>
                <ul>
                    <li className="nft-details-attribute">
                        <span className="trait">URL</span>  <span className="trait-value"><a target={"_blank"} href={file_url}>{shortenText(file_url)}</a></span>
                    </li>
                    <li className="nft-details-attribute">
                        <span className="trait">DNA</span>  <span className="trait-value">{shortenText(dna)}</span>
                    </li>
                    <li className="nft-details-attribute">
                        <span className="trait">GENERATION DATE</span>  <span className="trait-value">{new Date(date).toDateString()}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const shortenText = (text:string) => {
    const splited:string[] = text.split('')
    let shortSplit_1:any = [];
    let shortSplit_2:any = [];
    splited.map((item, index) => {
        if(index <= 14) shortSplit_1.push(item)
        else if(index >= (splited.length - 5)) shortSplit_2.push(item)
    })
    shortSplit_1 = shortSplit_1.join('');
    shortSplit_2 = shortSplit_2.join('');
    return `${shortSplit_1}...${shortSplit_2}`;
}