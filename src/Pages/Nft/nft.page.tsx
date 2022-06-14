import React from "react";
import './nft.page.css';
import {NftTableContainer} from "../../Containers/Nft/nftTable.container";
import {PageTitleComponent} from "../../Components/PageTitle/pageTitle.component";


export const NftPage:React.FC = () => {
    return <div>
        <PageTitleComponent text={"CHARACTERS"} />
        <NftTableContainer />
    </div>
}