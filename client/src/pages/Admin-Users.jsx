import { useEffect, useState } from "react"
import { useAuth ,API} from "../store/auth";
import './AdminUsers.css';
import { Link } from "react-router-dom";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            // const response = await fetch("http://localhost:5000/api/admin/users", {
            const response = await fetch(`${API}/api/admin/users`, {

                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("users is here", data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser =async(id) =>{
                try {
            // const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
            const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("users after delete ", data);
            if(response.ok){
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (<>
    <section className="admin-users-section">
        <div className="container">
            <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
  <div style={{ overflowX: "auto" }}>
        <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((curUser, index) =>{
                    return <tr key={index}>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td><Link to={`/admin/users/${curUser._id}/edit`}>EDIT</Link></td>
                        <td><button onClick={()=>deleteUser(curUser._id)}>DELETE</button></td>
                    </tr>

        })}
                
            </tbody>
        </table>
    
 </div>
        </div>
    </section>
    </>
    );
};

export default AdminUsers