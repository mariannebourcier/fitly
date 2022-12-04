import { Link } from "react-router-dom";
import "./Nav.css";
import Header from "../Header/Header";
import ThemedButton from "../../contexts/Themes/Themes";
import { UserContext } from "../../contexts/User/user-context";
import { useContext } from "react";


export default function Nav({ title, props }) {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  return (
    <div className="navigation">
      <div className="nav-container">
        <Link className="logo-link-container" to='/'>
          🐷
        </Link>

        <Link className="link" to="/signup">sign up</Link>
        <Link className="link" to="/signin">sign in</Link>
        {/* if signed in  */}
        {
          currentUser ? (
            <span className="link"  >sign out</span>

          ) : (
            <Link className="link" to="/signin">sign in</Link>
          )
        }
        <Link className="link" to="/profile">profile</Link>
        <Link className="link" to="/calculate">calculate</Link>

      </div>
      <ThemedButton />
    </div>
  )
}