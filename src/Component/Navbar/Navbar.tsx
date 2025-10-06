
import { useAuth } from "../../Context/UseAuth"
import logo from "./logo.avif"
import {Link} from "react-router-dom"

interface Props  {}

const Navbar = (props: Props) => {
const {isLoggedIn, user , logout} = useAuth();

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/"> 
          <img src={logo} alt="" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Dashboard
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
  <div className="hidden lg:flex items-center space-x-6 text-back bg-green-400">
  <div className=" bg-red-400 border-black hover:text-darkBlue">Welcome, {user?.userName }</div>
  <a
    onClick={logout}
    className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
  >
   Logout
  </a>
</div>
        ):(
          <div className="hidden lg:flex items-center space-x-6 text-back bg-green-400">
          <Link to="/login" className=" bg-red-400 border-black hover:text-darkBlue">Login</Link>
          <Link
            to="register"
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup  
          </Link>
        </div>
        )};
        
      </div>
    </nav>
  )
}

export default Navbar