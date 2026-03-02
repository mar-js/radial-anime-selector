export const RadialButton = ({ id, name, image }) => (
  <>
    <input type="radio" id={`opcion-${id}`} name="opcion" className="hidden" />
    <label
      htmlFor={`opcion-${id}`}
      className="pointer inline-block m-5 border-2 border-transparent"
    >
      <img
        src={image}
        alt={name}
        className="w-[100px] h-[100px] object-fill rounded-[50px]"
      />
    </label>
  </>
);
