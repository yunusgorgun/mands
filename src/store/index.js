import {configureStore, createSlice} from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: `song`,
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
        }
    }
});

const store = configureStore( {
    reducer: {
        songs: songsSlice.reducer// Big state object takes state name fromm here. And reducer in this line is used.
    }
} );
const startingState = store.getState();// That helps to see inside of state object
console.log(JSON.stringify(startingState)); 
console.log(store)

// Now we can update states with store.dispatch(action)
store.dispatch({
    type: 'song/addSong',
    payload: 'New Song!!!'
})

const finalState = store.getState();
console.log(JSON.stringify(finalState)); 

console.log(songsSlice.actions)// This line of code is action creators that produce slices automatically
console.log(songsSlice.actions.addSong("Some Song"))// This line gives an that action object