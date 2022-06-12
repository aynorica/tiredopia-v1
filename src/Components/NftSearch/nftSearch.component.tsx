import React, {useState} from "react";
import './nftSearch.component.css';
import {SearchSvg} from "../../Assets/Logo/search";

export interface NftSearchComponentInput {
    searchFunction:any
}

export const NftSearchComponent:React.FC<NftSearchComponentInput> = (data:NftSearchComponentInput) => {
    const { searchFunction } = data;
    const [input, setInput] = useState('');
    return (
        <div className="nft-search-component">
            <input
                className="nft-search-component-input"
                placeholder={"Search"}
                onChange={(e) => setInput(e.target.value)}
                maxLength={50}
            />
            <div className="nft-search-component-trigger" onClick={() => searchFunction(input)}>
                <SearchSvg />
            </div>
        </div>
    )
}