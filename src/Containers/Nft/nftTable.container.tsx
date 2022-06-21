import React from "react";
import './nftTable.container.css';
import {TitleComponent} from "../../Components/Title/title.component";
import {NftSearchComponent} from "../../Components/NftSearch/nftSearch.component";
import {NftUtilsComponent, NftUtilsComponentInput} from "../../Components/NftUtils/nftUtils.component";
import {NftItemComponent, NftItemComponentModel} from "../../Components/NftItem/nftItem.component";
import {nftItems} from "../Carousel/carousel.container";


export const NftTableContainer:React.FC = () => {
    return (
        <div className="bg-color">
            <div className="nft-container max-size">
                <div className="nft-container-utils">
                    <div className="nft-container-search">
                        <NftSearchComponent searchFunction={() => {}} placeholder={"Search"} icon={true}/>
                    </div>
                    <div className="nft-container-lists">
                        <div className="nft-container-sort">
                            <NftUtilsComponent items={sortItems} selectFunction={() => {}}/>
                        </div>
                    </div>
                </div>
                <div className="nft-container-items">
                    {
                        NftItems.map((nft, index) => {
                            nft.image = nftItems[index].img;
                            nft.name = nftItems[index].name;
                            return <NftItemComponent items={nft}/>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

const sortItems:NftUtilsComponentInput[] = [
    {
        text: 'Number Ascending',
        id: 'number-ascending'
    },
    {
        text: 'Number Descending',
        id: 'number-descending'
    },
    {
        text: 'Price high to low',
        id: 'price-high-low'
    },
    {
        text: 'Price low to high',
        id: 'price-low-high'
    },
]

const NftItems:NftItemComponentModel[] = [
    {
        "name": "Tiredopian #5",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #4",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    },
    {
        "name": "Tiredopian #3",
        "description": "It's not a faith in technology. It's faith in people.",
        "file_url": "ipfs://Qmbw3mCuEayQfcUd79gY421pJBvzNt9QWmC3tKWw7Jqq8x/3.jpeg",
        "custom_fields": {
            "dna": "1748249a7cda9488fd6f85b51bdf545ea669a598",
            "edition": 3,
            "date": 1648487351740
        },
        "external_url": "https://tiredopia.com",
        "attributes": [
            {
                "trait_type": "background",
                "value": "Harsh Yellow"
            },
            {
                "trait_type": "skin",
                "value": "Purple"
            },
            {
                "trait_type": "tattoo",
                "value": "yakuza tatto2"
            },
            {
                "trait_type": "eyes",
                "value": "Suspowhite"
            },
            {
                "trait_type": "clothing",
                "value": "Steample"
            },
            {
                "trait_type": "hair",
                "value": "Nerdeaky"
            },
            {
                "trait_type": "lips",
                "value": "Spoored"
            },
            {
                "trait_type": "glasses",
                "value": "Steamold"
            },
            {
                "trait_type": "accessories",
                "value": "Empty"
            },
            {
                "trait_type": "personality",
                "value": "Campaigner"
            },
            {
                "trait_type": "environment",
                "value": "Empty"
            },
            {
                "trait_type": "weapon",
                "value": "Empty"
            }
        ],
        "image": 'https://img-s1.onedio.com/id-624ead38e37476c216b2ac6b/rev-0/w-620/f-jpg/s-ff1cf6479409c5b23a919be96e6ec3ce731faa7c.jpg'
    }
]