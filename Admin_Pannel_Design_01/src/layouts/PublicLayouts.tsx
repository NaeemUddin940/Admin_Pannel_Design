// src/layouts/PublicLayouts.tsx
import Header from "@/components/Header/Header";
import { Outlet } from "react-router";
import Footer from "@/components/Footer/Footer";

export default function PublicLayouts() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
