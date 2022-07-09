import React, {useEffect, useState} from "react";
import './nftTable.container.css';
import {NftSearchComponent} from "../../Components/NftSearch/nftSearch.component";
import {NftUtilsComponent, NftUtilsComponentInput} from "../../Components/NftUtils/nftUtils.component";
import {NftItemComponent, NftItemComponentModel} from "../../Components/NftItem/nftItem.component";
import {ImageResponse} from "../../Models/image.response";
import axios from "axios";
import {NftPaginationComponent} from "../../Components/NftPagination/nftPagination.component";
import {ImageRequest, SortType} from "../../Models/image.request";


export const NftTableContainer:React.FC = () => {
    const [skip, setSkip] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const [nfts, setNfts] = useState<ImageResponse[]>([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        getImages({
            pagination: {
                get: 20,
                skip
            },
            sort: {
                attribute: "id",
                type: SortType.ASCENDING
            },
            search: search
        }).then(res => {
            setNfts(res)
        })
    }, [skip, search])
    return (
        <div className="bg-color">
            <div className="nft-container max-size">
                <div className="nft-container-utils">
                    <div className="nft-container-search">
                        <NftSearchComponent searchFunction={setSearch} placeholder={search} icon={true}/>
                    </div>

                </div>
                <div className="nft-container-items">
                    {
                        nfts.map((nft) => {
                            return <NftItemComponent items={nft}/>
                        })
                    }

                </div>
                <div>
                    <NftPaginationComponent func={setSkip} skip={skip}/>
                </div>
            </div>
        </div>
    )
}

const getImages = async (data:ImageRequest):Promise<ImageResponse[]> => {
    return await axios.post('https://server.tiredopia.com/get-images', data)
        .then(res => res.data)
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