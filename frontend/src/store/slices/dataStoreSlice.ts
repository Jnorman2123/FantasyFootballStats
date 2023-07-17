import { createSlice } from '@reduxjs/toolkit';

export interface DataStoreState {
    players: {
        name: string;
        position: string;
        drafted: string
    }[]
}

const initialState: DataStoreState = {
    players: [
        {name: 'Patrick Mahomes', position: 'Quarterback', drafted: 'Round 1 Pick 7 2017'},
        {name: 'Aaron Rodgers', position: 'Quarterback', drafted: 'unknown'},
        {name: 'Cooper Kupp', position: 'Wide Recevier', drafted: 'unknown'}
    ]
}

export const dataStoreSlice = createSlice({
    name: 'dataStore',
    initialState,
    reducers: {
        
    }
})

export const getPlayersState = (state: { dataStore: DataStoreState }) => state.dataStore.players
export default dataStoreSlice.reducer