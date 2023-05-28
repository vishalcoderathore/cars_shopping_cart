import { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const CarValue = (): ReactElement => {
  const data = useSelector((state: RootState) => state.cars.data);
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  const filteredCars = useMemo(() => {
    return data.filter(car => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm]);

  const totalCost = filteredCars.reduce((total, currentCar) => {
    return total + currentCar.cost;
  }, 0);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
