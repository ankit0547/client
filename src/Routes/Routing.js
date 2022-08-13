import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../app/modules/Landing/Landing";
import NotFound from "../app/common/404/NotFound";
import Application from "../app/modules/Application/Application";
import AdminDashboard from "../app/modules/Application/Admin/AdminDashboard";
import Auth from "../app/modules/Auth/Auth";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/dashboard/*" element={<Application />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Routing;
