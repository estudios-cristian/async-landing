export interface SearchChanel {
    kind: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: { totalResults: number; resultsPerPage: number };
    items: Items[];
}

export interface Items {
    kind: string;
    id: ID;
    snippet: Snippet;
}

export interface ID {
    kind: string;
    videoId: string;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
}

export interface Thumbnails {
    default: Image;
    medium: Image;
    high: Image;
}

export interface Image {
    url: string;
    width: number;
    height: number;
}
