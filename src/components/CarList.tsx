import { ReactElement, ReactNode, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, removeCar } from '../store';
import { Car } from '../store/slices/carSlice';

const CarList = (): ReactElement => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => {
    return state.cars.data;
  });

  const handleCarDelete = useCallback(
    (car: Car): void => {
      console.log('delete');
      dispatch(removeCar(car.id));
    },
    [dispatch]
  );

  const renderData = (): ReactNode[] => {
    return cars.map(car => (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button onClick={(): void => handleCarDelete(car)} className="button is-danger">
          Delete
        </button>
      </div>
    ));
  };

  return (
    <div className="car-list">
      {renderData()} <hr />
    </div>
  );
};

export default CarList;
