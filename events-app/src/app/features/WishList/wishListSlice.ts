import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'
import {  WishLIstItemType } from 'app/types'

export const WISH_LIST_SLICE = "wish-list-slice"

interface homeState {
    tickets: any[]
}

const initialState: homeState = {
    tickets: []
}

export const wishListSlice = createSlice({
    name: WISH_LIST_SLICE,
    initialState,
    reducers: {
        addTickets: (state, action: PayloadAction<WishLIstItemType>) => {
            state.tickets = [...state.tickets, action.payload];
        },
        removeTickets: (state, action: PayloadAction<string | undefined>) => {
            const temp = [...state.tickets].filter((el) => { return el?.id !== action.payload; });
            state.tickets = [...temp];
        },
    },
})

export const {
    addTickets,
    removeTickets
} = wishListSlice.actions

export const selectTickets = (state: RootState) => state[WISH_LIST_SLICE].tickets;

export default wishListSlice.reducer;