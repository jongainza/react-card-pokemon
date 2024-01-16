import React, { useState } from "react";

const useFlip = () => {
  const [state, setState] = useState(true);
  const changeState = () => {
    setState(!state);
  };
  return [state, changeState];
};

export default useFlip;
