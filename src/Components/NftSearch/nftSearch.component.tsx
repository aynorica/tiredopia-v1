import React, {useState} from "react";
import './nftSearch.component.css';
import {SearchSvg} from "../../Assets/Logo/search";

export interface NftSearchComponentInput {
    searchFunction:any,
    icon: boolean,
    placeholder:string
}

export const NftSearchComponent:React.FC<NftSearchComponentInput> = (data:NftSearchComponentInput) => {
    const { searchFunction, icon, placeholder } = data;
    const [input, setInput] = useState('');
    return (
        <div className="nft-search-component">
            <input
                className="nft-search-component-input"
                placeholder={placeholder}
                onChange={(e) => setInput(e.target.value)}
                maxLength={50}
            />
            {
                icon ?
                    <div className="nft-search-component-trigger" onClick={() => searchFunction(input)}>
                        <SearchSvg />
                    </div>
                    :
                    null
            }
        </div>
    )
}