export interface MovieItemInterface {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
}

export interface SortInterface {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface DataInterface {
    content: MovieItemInterface[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: SortInterface;        
        unpaged: boolean
    }
    size: number;
    sort: SortInterface;
    totalElements: number;
    totalPages: number;
}

export interface YearsWithMultipleWinnersInterface {
    year: number;
    winnerCount: number;
}

export interface StudiosWithWinCountInterface {
    name: string;
    winCount: number;
}

export interface ProducersItemInterface {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface ProducersInterface {
    min: ProducersItemInterface[];
    max: ProducersItemInterface[];
}