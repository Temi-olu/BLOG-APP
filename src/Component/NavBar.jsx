// import { IoIosSearch } from "react-icons/io";
function NavBar() {
  return (
    <div className="ml-20 p-6 flex gap-20 items-center ">
      <h1 className="font-bold">TechTales</h1>
      <div className="">
        <ul className=" flex gap-10">
          <l1>Home</l1>
          <l1>Article</l1>
          <l1>About</l1>
        </ul>
      </div>
         <div className=" relative left-89 flex gap-4">
      <input type="text" placeholder="   Search"  className="bg-gray-200 rounded-sm px-2"/>
     {/* <IoIosSearch  className="relative right-52 top-2 items-center"/> */}
      <button className="bg-blue-700 text-white rounded-sm px-2 py-1">New Article</button>
      </div>
    </div>
  );
}

export default NavBar;
