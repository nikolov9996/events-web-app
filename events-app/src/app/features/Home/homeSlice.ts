import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'
import { EventItem } from 'app/types'

export const HOME_SLICE = "home-slice"

interface homeState {
    events: EventItem[],
    page: number,
    size: number
}

const initialState: homeState = {
    events: [],
    page: 1,
    size: 10
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
    },
})

export const {
    setEvents,
    setPage,
    setSize
} = homeSlice.actions

export const selectEvents = (state: RootState) => state[HOME_SLICE].events;
export const selectSize = (state: RootState) => state[HOME_SLICE].size;
export const selectPage = (state: RootState) => state[HOME_SLICE].page;

export default homeSlice.reducer;