import ButtonFilter from "./ButtonFilter";

const MainContainer = () => {
  const btnList = [
    "All",
    "Music",
    "Podcast",
    "Mixes",
    "Comedy",
    "Web development",
    "Gaming",
    "Live",
    "Angular",
    "React",
    "Redux"
  ];
  return (
    <div className="flex flex-col my-8 mx-2">
      <div>
        {btnList.map((btn) => (
          <ButtonFilter name={btn} />
        ))}
      </div>

      <h1>Main container</h1>
    </div>
  );
};

export default MainContainer;
