import SideBarHeading from "./SideBarHeading";
import SideBarList from "./SideBarList";

const SideBar = ({
  isShowSideBar,
  setisShowSideBar,
}: {
  isShowSideBar: boolean;
  setisShowSideBar: (state: boolean) => void;
}) => {
  return (
    <>
      <div
        className={`sidebar z-[2000] text-white p-4 w-full md:w-1/4 absolute top-0 left-0 min-h-screen transform transition-transform duration-300 ease-in-out ${
          isShowSideBar ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <SideBarHeading />
        <SideBarList setisShowSideBar={setisShowSideBar} />
      </div>
    </>
  );
};

export default SideBar;
