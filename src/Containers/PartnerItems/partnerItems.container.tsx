import React from "react";
import './partnerItems.container.css';
import {PartnerItemComponent, PartnerItemComponentInputs} from "../../Components/partnerItem/partnertItem.component";

export const PartnerItemsContainer:React.FC = () => {
    return (
        <div className="partner-items-container">
            {
                partnerItemsInputs.map((item) => {
                    const { text, header, active } = item;
                    return <div className="partner-items-container-wrapper">
                        <PartnerItemComponent text={text} header={header} active={active}/>
                    </div>
                })
            }
        </div>
    )
}

const partnerItemsInputs:PartnerItemComponentInputs[] = [
    {
        header: 'Set Up Your Wallet',
        text: 'Your wallet could be set up easily through Metamask wallet, just install the wallet from metamask.io and create or import your wallet',
        active: true
    },
    {
        header: 'Buy Your Ticket',
        text: 'Every Tiredopia character is a ticket for Cyberdom, where users are allowed to design, create and build according to their will. ',
        active: false
    },
    {
        header: 'Collect NFT\'s',
        text: 'You can purchase multiple characters at a time. The characters portray different moods we go through in our daily life with unique design to them. ',
        active: false
    },
    {
        header: 'Sell Your NFT\'s',
        text: 'The collection can be bought and sold through Opensea easily. Holders can buy and sell indefinitely.',
        active: false
    },
]