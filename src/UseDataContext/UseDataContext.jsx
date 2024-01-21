/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useFetchData from "../hooks/useFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const { data } = useFetchData("src/data/data.json");

  const [selectedLogementId, setSelectedLogementId] = useState(null);




  return (
    <DataContext.Provider
      value={{ data, selectedLogementId, setSelectedLogementId }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
