import { useData } from '../contexts';

export const RadialButton = ({ id, name, image }) => {
  const { data, handleData } = useData();

  const handleClick = () => {
    handleData(name);
  };

  return (
    <div
      className={`radial-button ${name === data ? 'active' : ''}`}
      ariaLabel={name}
    >
      <input
        type="radio"
        id={`opcion-${id}`}
        name="opcion"
        className="radial-input"
        onClick={handleClick}
      />
      <label
        htmlFor={`opcion-${id}`}
        className="radial-label pointer inline-block m-5 border-2 border-transparent"
      >
        <img src={image} alt={name} />
      </label>
    </div>
  );
};
