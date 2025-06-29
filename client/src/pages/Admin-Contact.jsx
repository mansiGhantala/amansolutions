import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import './Admin-Contact.css'
import { toast } from "react-toastify";
const AdminContact = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      })
      const data = await response.json();
      console.log(" contact data:", data);
      if (response.ok) {
        setContactData(data);
      }

    } catch (error) {
      console.log(error);
    };
  }

  // defining the function deleteContactById 
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Deleted successfully");
      }else{
        toast.error("Delete failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getContactsData();
  }, [])
  return (<>
    <section className="admin-contacts-section">
      <h1>Aman Solution's Contact</h1>
      <div className="container admin-contact">
        {contactData.map((curContactData, index) => {
          const { username, email, message, _id } = curContactData;
          return (
            <div key={index}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{message}</p>
              <button onClick={() => deleteContactById(_id)}>DELETE</button>
            </div>
          )
        })}
      </div>
    </section>
  </>
  )
}

export default AdminContact