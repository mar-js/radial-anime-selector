export const RadialButton = ({ id, name, image }) => (
  <div className="radial-button" ariaLabel={name}>
    <input
      type="radio"
      id={`opcion-${id}`}
      name="opcion"
      className="radial-input"
    />
    <label
      htmlFor={`opcion-${id}`}
      className="radial-label pointer inline-block m-5 border-2 border-transparent"
    >
      <img src={image} alt={name} />
    </label>
  </div>
);
