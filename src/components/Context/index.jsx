import React, { useEffect, useState, createContext } from "react";

export const ContextWrap = createContext();
export const url = "https://jsonplaceholder.typicode.com";
const Context = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${url}/posts?_limit=10`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <ContextWrap.Provider value={[data, setData]}>
      {children}
    </ContextWrap.Provider>
  );
};

export default Context;
