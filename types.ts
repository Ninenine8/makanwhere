export interface LocationInfo {
    name: string;
    lat: number;
    lng: number;
    eateries: string[];
}

export interface LocationMap {
    [key: string]: LocationInfo;
}