import { DATA } from '../mocks';
import { RadialButton } from './radial-button';

export const ContainerRadialButton = () => (
  <div className="container-radial-button">
    {DATA.map((item) => (
      <RadialButton key={item.id} {...item} />
    ))}
  </div>
);
