import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiContactsBook3Fill, RiHome7Fill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import "./AdminLayout.css";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {user,isLoading} = useAuth();
  console.log("admin layout",user);


  if (isLoading) {
  return <h1>Loading...</h1>;
}

if (!user?.isAdmin) {
  return <Navigate to="/" replace />;
}
  return (
    <>
      <header className="admin-header">
        <div className="admin-container">
          <div className="admin-header-top">
            <div className="logo-brand">
              <NavLink to="/"><MdAdminPanelSettings />Admin Panel </NavLink>
            </div>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          </div>

          <nav className="nav_active">
            <ul className={menuOpen ? "active" : ""}>
              <li>
                <NavLink to="/admin/users" onClick={() => setMenuOpen(false)}>
                  <HiMiniUsers /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" onClick={() => setMenuOpen(false)}>
                  <RiContactsBook3Fill /> Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={() => setMenuOpen(false)}>
                  <MdMiscellaneousServices /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  <RiHome7Fill /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default AdminLayout;
