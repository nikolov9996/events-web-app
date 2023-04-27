export type Image = {
    ratio: string,
    url: string,
    width: number,
    height: number
}

export type PriceRangeType = {
    currency: string,
    max: number,
    min: number,
    type?: string
}

export type EventItem = {
    name: string,
    images: Image[],
    dates: { start: { dateTime: string } },
    id: string,
}

export type GetEventsType = {
    keyword: string,
    page: number,
    size: number
}

export type EventDetailsType = {
    name: string | undefined,
    images: Image[] | undefined,
    dates: {
        start?:
        {
            dateTime?: string,
            localDate?: string,
            localTime?: string
        }
    },
    priceRanges?: PriceRangeType[],
    id: string,
    url: string,
    seatmap?: { staticUrl?: string }
    accessibility?: { ticketLimit: number },
    info: string
}

export type WishLIstItemType = {
    id?: string,
    ticketsCount?: number,
    price?: string,
    image?: string,
    currency?: string,
    name?:string
}