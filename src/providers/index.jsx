import { useState } from 'react';
import { DataContext } from '../contexts';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const handleData = (newData) => {
    setData(newData);
  };

  const VALUE = {
    data,
    handleData,
  };

  return <DataContext.Provider value={VALUE}>{children}</DataContext.Provider>;
};
