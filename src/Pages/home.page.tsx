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
            <CarouselContainer transition={900} interval={1500}/>
            <CarouselContainer transition={1300} interval={2500}/>
            <RoadmapContainer />
            <PartnershipContainer />
            {/*<TeamContainer />*/}
            <BackgroundComponent />
            <FaqContainer />
        </>
    )
}