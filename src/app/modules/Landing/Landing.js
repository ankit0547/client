import React from "react";
import sentToastMessage from "../../common/Toast/Toast";
import "react-toastify/dist/inject-style";
import Header from "../../common/components/AppBar/AppBar";
import { useSelector } from "react-redux";

function Landing() {
  // const toastMessage = useSelector((state) => state.ApplicationState.toastMsg);
  return (
    <div>
      <button
        onClick={() =>
          sentToastMessage({ type: "error", message: "welcome Redux" })
        }
      >
        Click Toast
      </button>
    </div>
  );
}

export default Landing;
