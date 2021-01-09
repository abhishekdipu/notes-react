import React from "react";
import Comp1 from "./components/Comp1";

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={"abhishek"}>
        <AgeContext.Provider value={24}>
          <Comp1 />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default App;
