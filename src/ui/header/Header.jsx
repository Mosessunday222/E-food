import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/SearchOrder";
import Username from "../../features/user/Username";
function Header() {
  return (
    <header className= " sm:flex items-center justify-between text-center  bg-yellow-500 uppercase py-3 px-4 border-b border-stone-900 sm:px-6  ">
      <Link to="/" className=" sm:text-center tracking-widest"> fast food</Link>
      <SearchOrder /> 

      <Username/>
    </header>
  );
}

export default Header;
