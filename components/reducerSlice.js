import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        movies: [],
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        loadMovies(state, action) {
            state.movies = action.payload;
        },
        loadMovie(state, action) {
            state.movies.push(action.payload);
        }
    },
});

export default slice.reducer;

export const { loadMovies, loadMovie, setLoading } = slice.actions;