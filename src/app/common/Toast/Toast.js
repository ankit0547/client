import { toast } from "react-toastify";

function sentToastMessage({ type, message }) {
  debugger;
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  return toast[type](message, options);
}

export default sentToastMessage;
