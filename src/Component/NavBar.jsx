// import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="ml-20 p-6 flex gap-20 items-center ">
      <h1 className="font-bold">TechTales</h1>
      <div className="">
        <ul className=" flex gap-10">
       <Link to='/'><l1>Home</l1></Link>
          <l1>Article</l1>
          <l1>About</l1>
        </ul>
      </div>
         <div className=" relative left-89 flex gap-4 items-center">
      <input type="text" placeholder="   Search"  className="bg-gray-200 rounded-sm h-8 px-2"/>
     {/* <IoIosSearch  className="relative right-52 top-2 items-center"/> */}
 <Link to='/newpost'>    <button className="bg-blue-700 text-white rounded-sm px-2 py-1">New Article</button></Link> 
      <FaUserCircle  size={32}/>
      </div>
    </div>
  );
}

export default NavBar;
