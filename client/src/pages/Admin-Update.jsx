import { useEffect, useState } from "react";
import "./Admin-Update.css";  
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { MdOutlineArrowBackIos } from "react-icons/md";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  

  const params = useParams();
  console.log("params signgle user:", params);
  
  const {authorizationToken} = useAuth();
//   get single user data
const getSingleUsersData = async()=>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
            method: 'GET',
            headers:{
                Authorization :authorizationToken,
            },
        })
        const data = await response.json();
        console.log("single user data:", data);
        setData(data);

    } catch (error) {
        console.log(error);  
    };
}

useEffect(()=>{
    getSingleUsersData()
},[])


  const handleInput = (e) => {
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value,
  });
};


// to update trhe data dynamically
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationToken,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Updated Successfully");
      // Optionally reset form
      // setData({ username: "", email: "", phone: "" });
    } else {
      toast.error("Failed to update");
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
      <section className="section-update">
       <div className="update-container">
        <h1 className="main-hrading">Update User Data</h1>
       </div>
       <div className="container grid grid-two-cols">
       <section className="update-form">
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" autoComplete="off" value={data.username} onChange={handleInput} required/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="off" value={data.email} onChange={handleInput} required/>
        </div><div>
            <label htmlFor="phone">Mobile</label>
            <input type="phone" name="phone" id="phone" autoComplete="off" value={data.phone} onChange={handleInput} required/>
        </div>
          <button type="submit">Update</button>
        </form>
         <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <Link to="/admin/users" style={{ color: '#fff', textDecoration: 'underline' }}>
          <MdOutlineArrowBackIos />
        </Link>
      </div>
       </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
