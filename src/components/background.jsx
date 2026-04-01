import { useEffect } from 'react';
import { useData } from '../contexts';

export const Background = ({ children }) => {
  const { data } = useData();

  useEffect(() => {
    document
      .getElementsByTagName('main')[0]
      .style.setProperty('--url-bg', `url(${data.image})`);
  }, [data]);

  return <main data-url-bg={data.image}>{children}</main>;
};
