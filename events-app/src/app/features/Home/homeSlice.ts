import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'
import { eventItem } from 'app/types'

export const HOME_SLICE = "home-slice"

interface homeState {
    events: eventItem[]
}

const initialState: homeState = {
    events: []
}

export const homeSlice = createSlice({
    name: HOME_SLICE,
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<eventItem[]>) => {
            state.events = [...action.payload]
        }
    },
})

export const { setEvents } = homeSlice.actions

export const selectEvents = (state: RootState) => state[HOME_SLICE].events;

export default homeSlice.reducer;