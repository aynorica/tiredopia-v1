export interface ImageResponse {
    id: number;
    name: string;
    description: string;
    file_url: string;
    dna: string;
    external_url: string;
    image: string;
    edition: number;
    date: number;
    price: number;
    attributes: Attributes[]
}

export interface Attributes {
    id: number;
    trait_type: string;
    value: string;
}