import React, {useState} from "react";
import './carousel.container.css';
import {NftShowcaseComponent, NftShowcaseComponentInput} from "../../Components/NftShowcase/nftShowcase.component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export const CarouselContainer:React.FC<{transition:number, interval:number}> = (data:{transition:number, interval:number}) => {
    const [size, setSize] = useState(+window.innerWidth);
    const setting = () => setSize(+window.innerWidth);
    window.addEventListener("resize", setting);
    return (
        <div className="bg-color">
            <div className="carousel-container">
                <div>
                    <Carousel
                        dynamicHeight={false}
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



export const nftItems:NftShowcaseComponentInput[] = [
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/4593a4ad-54b8-42f3-4d79-484eba340d00/public',
        name: 'TIREDOPIA #1',
        alt: 'TIREDOPIA #1'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/61341508-bf01-4f3e-6024-3136b5197e00/public',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/c870f8a1-54ce-4807-5aa3-1beaf89d7100/public',
        name: 'TIREDOPIA #3',
        alt: 'TIREDOPIA #3'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/03f964ea-842d-4480-1fca-0ca9fdfb2500/public',
        name: 'TIREDOPIA #4',
        alt: 'TIREDOPIA #4'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/ffd6a833-fca2-4d15-b118-7bf42f409c00/public',
        name: 'TIREDOPIA #5',
        alt: 'TIREDOPIA #5'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/e8297e6e-7924-4223-8869-c61280750f00/public',
        name: 'TIREDOPIA #6',
        alt: 'TIREDOPIA #6'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/572df88f-332c-48ff-c3ff-a5482fa94d00/public',
        name: 'TIREDOPIA #7',
        alt: 'TIREDOPIA #7'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/aeded697-ba89-4824-025c-09b573349b00/public',
        name: 'TIREDOPIA #8',
        alt: 'TIREDOPIA #8'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/c5262cb7-7d49-4aed-5058-9ee7d1bbe100/public',
        name: 'TIREDOPIA #9',
        alt: 'TIREDOPIA #9'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/01727d9a-c08f-4784-d79a-baf603ac6400/public',
        name: 'TIREDOPIA #10',
        alt: 'TIREDOPIA #10'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/60cb99d4-3992-4b5e-0d72-01bd2a84e500/public',
        name: 'TIREDOPIA #11',
        alt: 'TIREDOPIA #11'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/8ed48762-f7df-4260-2dac-f7175375c700/public',
        name: 'TIREDOPIA #12',
        alt: 'TIREDOPIA #12'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/39591441-6770-49aa-3355-bf0295f03500/public',
        name: 'TIREDOPIA #13',
        alt: 'TIREDOPIA #13'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/4ee348f1-3b17-46f8-ea8e-046b454f6400/public',
        name: 'TIREDOPIA #13',
        alt: 'TIREDOPIA #13'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/b15454b7-2905-4680-7814-9006807e3700/public',
        name: 'TIREDOPIA #14',
        alt: 'TIREDOPIA #14'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/ffd6a833-fca2-4d15-b118-7bf42f409c00/public',
        name: 'TIREDOPIA #15',
        alt: 'TIREDOPIA #15'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/c5262cb7-7d49-4aed-5058-9ee7d1bbe100/public',
        name: 'TIREDOPIA #16',
        alt: 'TIREDOPIA #16'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/61341508-bf01-4f3e-6024-3136b5197e00/public',
        name: 'TIREDOPIA #17',
        alt: 'TIREDOPIA #17'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/4593a4ad-54b8-42f3-4d79-484eba340d00/public',
        name: 'TIREDOPIA #18',
        alt: 'TIREDOPIA #18'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/39591441-6770-49aa-3355-bf0295f03500/public',
        name: 'TIREDOPIA #19',
        alt: 'TIREDOPIA #19'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/8ed48762-f7df-4260-2dac-f7175375c700/public',
        name: 'TIREDOPIA #20',
        alt: 'TIREDOPIA #20'
    },
]