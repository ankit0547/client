import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../app/modules/Landing/Landing";
import NotFound from "../app/common/404/NotFound";
import Auth from "../app/modules/Auth/Auth";
import ClientDashboard from "../app/modules/Client/ClientDashboard/ClientDashboard";
import AdminDashboard from "../app/modules/Admin/AdminDashboard";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/dashboard/*" element={<ClientDashboard />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Routing;
