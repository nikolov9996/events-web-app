import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'
import { EventItem, EventItemUser, PageInfoType } from 'app/types'

export const HOME_SLICE = "home-slice"

interface homeState {
    events: EventItem[],
    pageInfo: PageInfoType,
    page: number,
    size: number,
    userEvents: EventItemUser[]
}

const initialState: homeState = {
    events: [],
    pageInfo: {
        number: 0,
        size: 0,
        totalElements: 0,
        totalPages: 0
    },
    page: 1,
    size: 12,
    userEvents: []
}

export const homeSlice = createSlice({
    name: HOME_SLICE,
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<EventItem[]>) => {
            state.events = [...action.payload]
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSize: (state, action: PayloadAction<number>) => {
            state.size = action.payload;
        },
        addUserEvent: (state, action: PayloadAction<EventItemUser>) => {
            const temp = [...state.userEvents]
            state.userEvents = [...temp, action.payload]
        },
        setPageInfo: (state, action: PayloadAction<PageInfoType>) => {
            state.pageInfo = action.payload;
        },
    },
})

export const {
    setEvents,
    setPage,
    setSize,
    addUserEvent,
    setPageInfo
} = homeSlice.actions

export const selectEvents = (state: RootState) => state[HOME_SLICE].events;
export const selectUserEvents = (state: RootState) => state[HOME_SLICE].userEvents;
export const selectSize = (state: RootState) => state[HOME_SLICE].size;
export const selectPage = (state: RootState) => state[HOME_SLICE].page;
export const selectPageInfo = (state: RootState) => state[HOME_SLICE].pageInfo;


export default homeSlice.reducer;