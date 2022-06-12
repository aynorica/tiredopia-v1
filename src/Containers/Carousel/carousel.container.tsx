import React, {useState} from "react";
import './carousel.container.css';
import {NftShowcaseComponent, NftShowcaseComponentInput} from "../../Components/NftShowcase/nftShowcase.component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// autoPlay={true}
// autoFocus={true}
// centerMode={true}
// centerSlidePercentage={20}
// emulateTouch={true}
// infiniteLoop={true}
// selectedItem={2}
// showArrows={false}
// showIndicators={false}
// preventMovementUntilSwipeScrollTolerance={true}
// swipeScrollTolerance={100}
// transitionTime={data.transition}
// interval={data.interval}

export const CarouselContainer:React.FC<{transition:number, interval:number}> = (data:{transition:number, interval:number}) => {
    const [size, setSize] = useState(+window.innerWidth);
    const setting = () => setSize(+window.innerWidth);
    window.addEventListener("resize", setting);
    // console.log(size)
    return (
        <div className="bg-color">
            <div className="carousel-container">
                <Carousel
                    autoPlay={true}
                    autoFocus={true}
                    centerMode={true}
                    centerSlidePercentage={sizeCalculator(size)}
                    emulateTouch={true}
                    infiniteLoop={true}
                    selectedItem={2}
                    showArrows={false}
                    showIndicators={false}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={100}
                    transitionTime={data.transition}
                    interval={data.interval}
                >
                    {
                        nftItems.map((item, index) => {
                            const { alt, img, name } = item;
                            return <div className="carousel-item">
                                <NftShowcaseComponent alt={alt} img={img} name={`${name}:${index}`}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

const sizeCalculator = (width:number) => {
    if(width >= 1980) {
        return 20
    }
    if(width <= 420) {
        return 90
    }
    if(width >= 1880) {
        return 20
    }
    if(width >= 1780) {
        return 22
    }
    if(width >= 1680) {
        return 24
    }
    if(width >= 1580) {
        return 26
    }
    if(width >= 1480) {
        return 26
    }
    if(width >= 1380) {
        return 26
    }
    if(width >= 1280) {
        return 28
    }
    if(width >= 1180) {
        return 30
    }
    if(width >= 1080) {
        return 32
    }
    if(width >= 980) {
        return 34
    }
    if(width >= 880) {
        return 38
    }
    if(width >= 780) {
        return 42
    }
    if(width >= 680) {
        return 48
    }
    if(width >= 580) {
        return 56
    }
    if(width >= 420) {
        return 90
    }
}



const nftItems:NftShowcaseComponentInput[] = [
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },

]