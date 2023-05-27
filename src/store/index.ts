import { carReducer, addCar, changeSearchTerm, removeCar } from './slices/carSlice';
import { formReducer, changeCost, changeName } from './slices/formSlice';
import { configureStore } from '@reduxjs/toolkit';

// Configure the Redux store
const store = configureStore({
  reducer: {
    cars: carReducer, // Combined reducer function wrapping up smaller reducers like addSong, removeSong
    form: formReducer,
  },
});

// Export the store
export { store };

// Export the action creator
export { changeCost, changeName, addCar, changeSearchTerm, removeCar };
