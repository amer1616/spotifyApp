export interface Artist {
    id: number;
    name: string;
    genres: any;
    albums: Album[];

}

export interface Album {
    id: number;
}
