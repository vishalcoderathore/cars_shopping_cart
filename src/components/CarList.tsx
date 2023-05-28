import { ReactElement, ReactNode, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, removeCar } from '../store';
import { Car } from '../store/slices/carSlice';

const CarList = (): ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cars.data);
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  // Uses the useMemo hook to memoize the cars array
  const cars = useMemo(() => {
    if (searchTerm.trim() === '') {
      return data; // Return the original data when searchTerm is empty
    }
    return data.filter(car => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm]);

  const handleCarDelete = useCallback(
    (car: Car): void => {
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
