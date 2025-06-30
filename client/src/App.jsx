import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminContact from "./pages/Admin-Contact";
import AdminUsers from "./pages/Admin-Users";
import AdminUpdate from "./pages/Admin-Update";

const App = () => {

  return (
    <div className="page-wrapper"> {/* ✅ Flex container */}
      <BrowserRouter>
        <Navbar />
        <div className="page-content"> {/* ✅ This will expand to push footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
      
            <Route path="/admin" element={<AdminLayout />}> 
              <Route index element={<AdminUsers />} /> {/* ✅ Default for /admin */}
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContact />} />
              <Route path="users/:id/edit" element={<AdminUpdate />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
