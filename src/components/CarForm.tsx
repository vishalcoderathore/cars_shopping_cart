import { changeName, changeCost, RootState, addCar } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ReactElement } from 'react';

const CarForm = (): ReactElement => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state: RootState) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="label" className="label">
              Name
            </label>
            <input type="text" className="input is-expanded" value={name} onChange={handleNameChange} />
          </div>
          <div className="field">
            <label htmlFor="label" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost > 0 ? cost : ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" disabled={name === '' || cost < 0}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
