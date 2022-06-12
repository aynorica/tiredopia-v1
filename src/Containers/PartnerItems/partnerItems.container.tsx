import React from "react";
import './partnerItems.container.css';
import {PartnerItemComponent, PartnerItemComponentInputs} from "../../Components/partnerItem/partnertItem.component";

export const PartnerItemsContainer:React.FC = () => {
    return (
        <div className="partner-items-container">
            {
                partnerItemsInputs.map(item => {
                    const { text, header } = item;
                    return <div className="partner-items-container-wrapper">
                        <PartnerItemComponent text={text} header={header}/>
                    </div>
                })
            }
        </div>
    )
}

const partnerItemsInputs:PartnerItemComponentInputs[] = [
    {
        header: 'Set Up Your Wallet',
        text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
        header: 'Buy Your Collection',
        text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
        header: 'Add Your NFT\'s',
        text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
        header: 'Sell Your NFT\'s',
        text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
]