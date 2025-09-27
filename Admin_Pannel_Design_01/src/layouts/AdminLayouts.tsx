// src/layouts/AdminLayout.tsx
import { Outlet } from "react-router";
import { Link } from "react-router";

export default function AdminLayouts() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Admin sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-3">
          <Link to="/admin/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/users" className="hover:underline">
            Users
          </Link>
          <Link to="/admin/settings" className="hover:underline">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Admin main content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* Admin pages render here */}
      </main>
    </div>
  );
}
