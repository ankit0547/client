import { Route, Routes } from "react-router-dom";
import NotFound from "../../common/404/NotFound";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

function Auth() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Auth;
