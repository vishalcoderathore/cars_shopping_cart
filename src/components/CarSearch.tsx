import { useDispatch, useSelector } from 'react-redux';
import { RootState, changeSearchTerm } from '../store';
import { ReactElement } from 'react';

const CarSearch = (): ReactElement => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="search" className="label">
          Search
        </label>
        <input type="text" className="input" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
    </div>
  );
};

export default CarSearch;
