import React from "react";
import { getPublicPath } from "../../../utils/utils";

function NotFound() {
  return (
    <>
      <img src={getPublicPath("/404.gif")} width={600} alt="Page not found !" />
      <h1>Page Not Found</h1>
    </>
  );
}

export default NotFound;
