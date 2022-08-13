import { Route, Routes } from "react-router-dom";
import NotFound from "../../common/404/NotFound";
import ClientDashboard from "./Client/ClientDashboard/ClientDashboard";

function Application() {
  return (
    <Routes>
      <Route path="/" element={<ClientDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Application;
