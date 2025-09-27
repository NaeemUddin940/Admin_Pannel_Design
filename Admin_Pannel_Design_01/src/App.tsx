import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router";
import PublicLayouts from "./layouts/PublicLayouts";
import AdminRoute from "./admin/Routes/AdminRoute";
import AdminLayouts from "./layouts/AdminLayouts";
import NotFound from "./pages/NotFound";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Settings from "./admin/pages/Settings";

function App() {
  return (
    <Routes>
      {/* Public pages with header/footer */}
      <Route element={<PublicLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayouts />
          </AdminRoute>
        }>
        {/* <Route path="admin-panel" element={<AdminPanel />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
