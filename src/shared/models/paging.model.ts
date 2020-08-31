export interface IPagingParams {
    page: number;
    size: number;
    order?: string;
    descending?: boolean;
}

export interface IPagingMeta {
    page: number;
    size: number;
    totalPages: number;
    total: number;
}

export interface IPagingResult<T> {
    data: T[];
    pagination: IPagingMeta;
}
