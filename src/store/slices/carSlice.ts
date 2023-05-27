import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

type Car = {
  name: string;
  cost: number;
  id: string;
};

type CarsState = {
  searchTerm: string;
  cars: Car[];
};

const initialState: CarsState = {
  searchTerm: '',
  cars: [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<Omit<Car, 'id'>>) {
      state.cars.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      state.cars = state.cars.filter(car => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
