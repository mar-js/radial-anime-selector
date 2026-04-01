import { useState } from 'react';
import { DataContext } from '../contexts';
import { DATA } from '../mocks';

export const DataProvider = ({ children }) => {
  const storedData = localStorage.getItem('data');
  const initialData = storedData ? JSON.parse(storedData) : DATA[0];
  const [data, setData] = useState(initialData);

  const handleData = (newData) => {
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  };

  const VALUE = {
    data,
    handleData,
  };

  return <DataContext.Provider value={VALUE}>{children}</DataContext.Provider>;
};
