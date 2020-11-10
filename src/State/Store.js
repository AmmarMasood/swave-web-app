import React, { useState } from "react";
export const componentContext = React.createContext();
export const userContext = React.createContext();
export const dataContext = React.createContext();
export const selectedClassContext = React.createContext();
export const selectedSessionContext = React.createContext();

const Store = ({ children }) => {
  const [displayComponent, setDisplayComponent] = useState(1);
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    moduleName: "",
    divisionName: "",
    moduleSummary: "",
    moduleClasses: [],
    adminSuggestionForModule:{
      moduleName: "",
      divisionName: "",
      moduleSummary: ""
    }
  });
  const [selectedClass, setSelectedClass] = useState(-1);
  const [selectedSession, setSelectedSession] = useState(-1);

  return (
    <componentContext.Provider value={[displayComponent, setDisplayComponent]}>
      <userContext.Provider value={[user, setUser]}>
        <dataContext.Provider value={[data, setData]}>
          <selectedClassContext.Provider value={[selectedClass, setSelectedClass]}>
            <selectedSessionContext.Provider value={[selectedSession, setSelectedSession]}>
        {children}
        </selectedSessionContext.Provider>
        </selectedClassContext.Provider>
        </dataContext.Provider>
      </userContext.Provider>
    </componentContext.Provider>
  );
};

export default Store;
