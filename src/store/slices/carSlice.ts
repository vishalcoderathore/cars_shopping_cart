import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export type Car = {
  name: string;
  cost: number;
  id: string;
};

type CarsState = {
  searchTerm: string;
  data: Car[];
};

const initialState: CarsState = {
  searchTerm: '',
  data: [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<Omit<Car, 'id'>>) {
      state.data.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      state.data = state.data.filter(car => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
