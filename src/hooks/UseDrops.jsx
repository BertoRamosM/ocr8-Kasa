import { useState } from "react";
const useDropdown = () => {
  const [dropdownState, setDropdownState] = useState("close");

  const handleDropdownToggle = () => {
    setDropdownState((prevState) => (prevState === "close" ? "open" : "close"));
  };

  return [dropdownState, handleDropdownToggle];
};

export default useDropdown;
