const ButtonFilter = ({ name }: { name: string }) => {
  return (
    <>
      <button className="px-3 py-2 m-2 bg-gray-100 rounded-lg">{name}</button>
    </>
  );
};

export default ButtonFilter;
