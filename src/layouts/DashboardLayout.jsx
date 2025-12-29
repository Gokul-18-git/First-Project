import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h3>Dashboard</h3>
        <p>My Courses</p>
        <p>Profile</p>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
