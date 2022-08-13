import Routing from "./Routes/Routing";
import "react-toastify/dist/ReactToastify.css";
import {
  Backdrop,
  Button,
  CircularProgress,
  Snackbar,
  ThemeProvider,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { theme } from "./theme/appTheme";
import { useDispatch, useSelector } from "react-redux";
import { setAppLoader } from "./app/common/redux/commonActions/commonActions";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const apploader = useSelector((state) => state.ApplicationState.loaded);
  const dispatch = useDispatch();
  console.log(theme, ">>>>>>>");

  const handleBackDropClose = () => {
    dispatch(setAppLoader(false));
  };
  const handleBackDropToggle = () => {
    dispatch(setAppLoader(true));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastContainer />
        <Backdrop open={apploader} onClick={handleBackDropClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Routing />
        {/* <Button
          variant="outlined"
          color="primary"
          onClick={handleBackDropToggle}
        >
          Show backdrop
        </Button> */}

        {/* <button onClick={notify}>Notify!</button> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
