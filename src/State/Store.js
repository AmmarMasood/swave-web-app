import React, { useState } from "react";

export const componentContext = React.createContext();

const Store = ({ children }) => {
  const [displayComponent, setDisplayComponent] = useState(1);

  return (
    <componentContext.Provider value={[displayComponent, setDisplayComponent]}>
      {children}
    </componentContext.Provider>
  );
};

export default Store;
