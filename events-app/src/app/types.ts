export type Image = {
    ratio: string,
    url: string,
    width: number,
    height: number
}

export type eventItem = {
    name: string,
    images: Image[],
    dates: { start: { dateTime: string } },
    priceRanges: any,
    id: string,
    url: string,
}