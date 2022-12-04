//user context for app, keep track of current user, sign out
import { createContext, useState } from "react";
//will need to be connected to firebase 

//keep track of user state
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

//signin
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(UserContext);
  const value = { currentUser, setCurrentUser };


//signout

return (
  <UserContext.Provider>{children}</UserContext.Provider>
);
}