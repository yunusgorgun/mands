import { configureStore } from "@reduxjs/toolkit";
import { addSong, removeSong, songReducer } from "./slices/songsSlice";
import { addMovie, removeMovie, movieReducer } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songReducer, // These are named as a combined reducer.
    movies: movieReducer, // Big state object takes state name from here. And reducer in this line is used.
  },
});

export { addMovie, removeMovie, addSong, removeSong, reset, store };

// const startingState = store.getState(); // That helps to see inside of state object
// console.log(JSON.stringify(startingState));
// console.log(store);

// // Now we can update states with store.dispatch(action)
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!",
// });

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

//console.log(moviesSlice.actions.reset.toString()); // This line of code helps to see type of action creator

//The code that at the below is the first way to add reducer that written in the another reducer.
//
// const songsSlice = createSlice({
//   name: `song`,
//   initialState: [],
//   reducers: {
//     addSong(state, action) {
//       state.push(action.payload);
//     },
//     removeSong(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase(moviesSlice.actions.reset, () => {
//       return [];
//     });
//   },
// });

// const moviesSlice = createSlice({
//   name: "movie",
//   initialState: [],
//   reducers: {
//     addMovie(state, action) {
//       state.push(action.payload);
//     },
//     removeMovie(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     },
//     reset(state, action) {
//       //state = []; This does not work
//       return [];
//     },
//   },
// });
//export const { addMovie, removeMovie, reset } = moviesSlice.actions;
