import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import { ReactElement } from 'react';

const App = (): ReactElement => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
