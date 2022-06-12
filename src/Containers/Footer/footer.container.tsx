import React from "react";
import './footer.container.css';
import {SocialContainer} from "../Social/social.container";
import {FooterDescContainer} from "../FooterDescription/footerDesc.container";
import {SubscriptionContainer} from "../Subscription/subscription.container";


export const FooterContainer:React.FC = () => {
    return (
        <div className="bg-team-color">
            <div className="footer-container max-size">
                <SocialContainer />
                <div className="footer-container-description">
                    <FooterDescContainer />
                </div>
                {/*<div>*/}
                {/*    <SubscriptionContainer />*/}
                {/*</div>*/}
            </div>
        </div>
    )
}