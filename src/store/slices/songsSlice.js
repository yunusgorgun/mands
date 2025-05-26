import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: `song`,
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions; // We are destructuring action creator object
export const songReducer = songsSlice.reducer; // At here we just assigned or referenced object to the variable

console.log(songsSlice.actions); // This line of code is action creators that produce slices automatically
console.log(songsSlice.actions.addSong("Some Song")); // This line gives an that action object
