import { useCallback, useEffect, useRef } from 'react';
import { DATA } from '../mocks';
import { RadialButton } from './radial-button';

export const ContainerRadialButton = ({ children }) => {
  const ref = useRef(null);
  let offsetX = 0;
  let offsetY = 0;

  const handleMove = useCallback(
    (e) => {
      const x = e.clientX - offsetX - 200;
      const y = e.clientY - offsetY - 200;

      ref.current.style.left = `${x}px`;
      ref.current.style.top = `${y}px`;
    },
    [offsetX, offsetY],
  );

  useEffect(() => {
    ref.current.addEventListener('pointerdown', (e) => {
      const rect = ref.current.getBoundingClientRect();
      offsetX = e.clientX - rect.left - 200;
      offsetY = e.clientY - rect.top - 200;

      document.addEventListener('pointermove', handleMove);
      document.addEventListener(
        'pointerup',
        () => {
          document.removeEventListener('pointermove', handleMove);
        },
        { once: true },
      );
    });
  }, [handleMove, offsetX, offsetY]);

  return (
    <div ref={ref} className="container-radial-button">
      {DATA.map((item) => (
        <RadialButton key={item.id} {...item} />
      ))}
      <div className="container-radial-children">{children}</div>
    </div>
  );
};
