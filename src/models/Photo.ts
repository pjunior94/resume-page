
export class Photo {
    src?: string;
    alt: string | undefined;
    width?: number;
    height?: number;

    link?: string;
    name?: string;

    constructor(photo:Photo) {
        this.src = photo.src;
        this.alt = photo.alt;
        this.width = photo.width;
        this.height = photo.height;

        this.link = photo.link;
        this.name = photo.name;
    }
}