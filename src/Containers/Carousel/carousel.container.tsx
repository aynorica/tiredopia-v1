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
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/88f9749b-5f3d-422f-4b57-36e82acf5500/public',
        name: 'TIREDOPIA #1',
        alt: 'TIREDOPIA #1'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/a0a9c34c-b4ce-4035-8505-df1420f85100/public',
        name: 'TIREDOPIA #2',
        alt: 'TIREDOPIA #2'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/34c32b58-bca6-4180-b3c5-b37466f6f700/public',
        name: 'TIREDOPIA #3',
        alt: 'TIREDOPIA #3'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/50751d73-8b02-4973-13ef-83acbe986a00/public',
        name: 'TIREDOPIA #4',
        alt: 'TIREDOPIA #4'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/f546787d-4629-43f5-1470-51a6d898b700/public',
        name: 'TIREDOPIA #5',
        alt: 'TIREDOPIA #5'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/cf0f2696-32c7-4cd4-a334-54dccc471800/public',
        name: 'TIREDOPIA #6',
        alt: 'TIREDOPIA #6'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/494df67a-4388-4df4-6566-178d079a6200/public',
        name: 'TIREDOPIA #7',
        alt: 'TIREDOPIA #7'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/127d2bc3-596c-4f3b-5571-1363f6bfff00/public',
        name: 'TIREDOPIA #8',
        alt: 'TIREDOPIA #8'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/5e295414-4c3e-4bbc-9174-f8f54d886b00/public',
        name: 'TIREDOPIA #9',
        alt: 'TIREDOPIA #9'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/c76422ad-553c-47e5-e802-c61b44ff4b00/public',
        name: 'TIREDOPIA #10',
        alt: 'TIREDOPIA #10'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/6b0e692b-eb78-42a0-e33c-c810a334b600/public',
        name: 'TIREDOPIA #11',
        alt: 'TIREDOPIA #11'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/d011f11e-5b81-48a5-46d2-f3b825937600/public',
        name: 'TIREDOPIA #12',
        alt: 'TIREDOPIA #12'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/91d69e26-d8c1-462f-c548-771d0fce5500/public',
        name: 'TIREDOPIA #13',
        alt: 'TIREDOPIA #13'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/4ee348f1-3b17-46f8-ea8e-046b454f6400/public',
        name: 'TIREDOPIA #13',
        alt: 'TIREDOPIA #13'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/81dd47f0-5b50-464d-c401-132b39ab9e00/public',
        name: 'TIREDOPIA #14',
        alt: 'TIREDOPIA #14'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/887727e0-e3f5-4725-b245-c7e1c8e8f300/public',
        name: 'TIREDOPIA #15',
        alt: 'TIREDOPIA #15'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/2cfdae33-95bd-4192-b916-102afbfd7900/public',
        name: 'TIREDOPIA #16',
        alt: 'TIREDOPIA #16'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/419c8907-a599-42b3-bfa7-36f4e5224600/public',
        name: 'TIREDOPIA #17',
        alt: 'TIREDOPIA #17'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/baf006fd-e9c2-45ac-59a2-94733d443a00/public',
        name: 'TIREDOPIA #18',
        alt: 'TIREDOPIA #18'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/81ba76fd-13ed-404e-d005-cb9cdc644c00/public',
        name: 'TIREDOPIA #19',
        alt: 'TIREDOPIA #19'
    },
    {
        img: 'https://imagedelivery.net/9htEsbM85VXhE8lOYQH9iw/e706b9e9-5730-4584-7c2a-a124f891d100/public',
        name: 'TIREDOPIA #20',
        alt: 'TIREDOPIA #20'
    },
]