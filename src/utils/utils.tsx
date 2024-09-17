import React, { ReactElement } from "react";
import { ReactJSXElementAttributesProperty } from "@emotion/react/types/jsx-namespace";

export const withProps = <P extends ReactJSXElementAttributesProperty>(component: ReactElement<P>, extraProps: P) => {
  return React.cloneElement(component, extraProps);
};

// min and max are inclusive
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
};