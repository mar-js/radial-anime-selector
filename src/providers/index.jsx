import { useState } from 'react';
import { DataContext } from '../contexts';
import { DATA } from '../mocks';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(DATA[0]);

  const handleData = (newData) => {
    setData(newData);
  };

  const VALUE = {
    data,
    handleData,
  };

  return <DataContext.Provider value={VALUE}>{children}</DataContext.Provider>;
};
