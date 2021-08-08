import * as React from "react";

export const navigationRef = React.createRef();

export default function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}
