interface Size {
    md: ImageSize;
}

export interface ImageSize {
    height: number;
    width: number;
}

const ImageSizes: Size = {
    md: { height: 256, width: 256 },
};

const { md } = ImageSizes;

export { md };
