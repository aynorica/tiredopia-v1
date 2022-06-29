export interface ImageRequest {
    pagination: {
        get: number,
        skip: number
    },
    sort: {
        attribute: string,
        type:SortType
    },
    search: string
}

export enum SortType {
    ASCENDING = 'ASC',
    DESCENDING = 'DESC'
}