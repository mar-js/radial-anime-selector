import { useCallback, useEffect, useState } from 'react';
import { DataContext } from '../contexts';
import { DATA } from '../mocks';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const handleData = useCallback((newData) => {
    setData(newData);
  }, []);

  useEffect(() => {
    handleData([DATA[0]]);
  }, [handleData]);

  const VALUE = {
    data,
    handleData,
  };

  return <DataContext.Provider value={VALUE}>{children}</DataContext.Provider>;
};
