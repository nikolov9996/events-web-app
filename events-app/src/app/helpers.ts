import { Image } from "./types";

export const getLargestImage = (arr: Image[] | undefined) => {
    if (!arr) return {}
    const temp: any[] = arr?.sort((a, b) => b?.width - a?.width);
    return temp[0]
}