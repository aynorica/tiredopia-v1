import React from "react";
import {IntroContainer} from "../Containers/Intro/intro.container";
import {AboutContainer} from "../Containers/About/about.container";
import {CarouselContainer} from "../Containers/Carousel/carousel.container";
import {RoadmapContainer} from "../Containers/RoadMap/roadmap.container";
import {PartnershipContainer} from "../Containers/Partnership/partnership.container";
import {BackgroundComponent} from "../Components/Background/background.component";
import {FaqContainer} from "../Containers/Faq/faq.container";
import {FooterContainer} from "../Containers/Footer/footer.container";


export const HomePage:React.FC = () => {
    return (
        <>
            <IntroContainer />
            <AboutContainer main={true}/>
            <div className="bg-color" style={{paddingBottom: '20px'}}>
                <div className="bg-color">
                    <CarouselContainer transition={1400} interval={2500}/>
                </div>
                <div style={{marginTop: '-85px'}}>
                    <CarouselContainer transition={1700} interval={3500}/>
                </div>
            </div>
            <RoadmapContainer />
            <PartnershipContainer />
            {/*<TeamContainer />*/}
            <BackgroundComponent />
            <FaqContainer />
        </>
    )
}