export const EditButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="pointer inline-block m-5 border-2 border-transparent"
    type="button"
  >
    <img
      src="/icons/edit.svg"
      alt="Edit"
      className="w-[100px] h-[100px] object-fill rounded-[50px]"
    />
  </button>
);
