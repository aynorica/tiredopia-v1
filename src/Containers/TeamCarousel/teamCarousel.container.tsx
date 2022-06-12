import React from "react";
import './teamCarousel.container.css';
import {TeamCardComponent, TeamCardComponentInput} from "../../Components/TeamCard/teamCard.component";
import {Carousel} from "react-responsive-carousel";

export interface TeamCarouselContainerInput {
    items: TeamCardComponentInput[]
}

export const TeamCarouselContainer:React.FC<TeamCarouselContainerInput> = (data:TeamCarouselContainerInput) => {
    const { items } = data;
    return (
        <div className="team-carousel-container">
            <div className="team-carousel-container-position">
                <Carousel
                    autoPlay={false}
                    autoFocus={true}
                    centerMode={true}
                    centerSlidePercentage={20}
                    emulateTouch={true}
                    infiniteLoop={false}
                    selectedItem={2}
                    showArrows={false}
                    showIndicators={false}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={10}
                    transitionTime={1000}
                >
                    {
                        items.map(item => {
                            const { header, img, link, text } = item;
                            return <div className="team-carousel-container-item">
                                <TeamCardComponent header={header} img={img} link={link} text={text}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}