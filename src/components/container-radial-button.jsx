import { DATA } from '../mocks';
import { RadialButton } from './radial-button';

export const ContainerRadialButton = ({ children }) => (
  <div className="container-radial-button">
    {DATA.map((item) => (
      <RadialButton key={item.id} {...item} />
    ))}
    <div className="container-radial-children">{children}</div>
  </div>
);
