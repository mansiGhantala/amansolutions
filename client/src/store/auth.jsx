import { createContext, useContext, useEffect, useState } from "react";
 const AuthContext = createContext();

 const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
 const [services, setServices] = useState([]); // Correct initialization
// const authorizationToken = `Bearer ${token}`;//add for admin-users.jsx authorizationToken
const authorizationToken = `Bearer ${token}`;
// const API = "http://localhost:5000";
// const API = "https://api"

const API = import.meta.env.VITE_APP_URI_API;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
       return localStorage.setItem("token",serverToken);
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIn",isLoggedIn);
    
    // tackling the logout functionality
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    };

// jwt Authentication - to get the currently loggedin user data
const userAuthentication = async () => {
  try {
    setIsLoading(true);

    const response = await fetch(`${API}/api/auth/user`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });

    const contentType = response.headers.get("content-type");
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Response error:", errorText);
      setIsLoading(false);
      return;
    }

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("✅ User data", data.userData);
      setUser(data.userData);
    } else {
      const text = await response.text();
      console.error("❌ Not JSON:", text);
    }
  } catch (error) {
    console.error("❌ Network Error:", error);
  } finally {
    setIsLoading(false);
  }
};

// const userAuthentication = async () =>{
//     try {
//         setIsLoading(true);
//         // const response = await fetch("http://localhost:5000/api/auth/user",{
//         const response = await fetch(`${API}/api/auth/user`,{
//             method: "GET",
//             headers:{
//                 // Authorization: `Bearer ${token}`, 
//                 Authorization:authorizationToken, 
//             },
//         });
//         if(response.ok){
//             const data = await response.json();
//             console.log("user data", data.userData);
//             setUser(data.userData);
//             setIsLoading(false);
//         }else{
//             console.log("Error fetching user data");
//             setIsLoading(false);
//         }

//     } catch (error) {
//         console.error("ERROR fetching user data");
//     }
// };

// to fetch the services data form the database 
const getServices = async() => {
    try {
        // const response = await fetch("http://localhost:5000/api/data/service",{
                const response = await fetch(`${API}/api/data/service`,{
            method: "GET",

    });

    if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
    }
    } catch (error) {
        console.log(`services frontend erroe : ${error}`); 
    }
};

useEffect(()=> {
    getServices();
    userAuthentication();
},[])
    return (
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, services,authorizationToken, isLoading,API}}>
        {children}
    </AuthContext.Provider>
    );
};

 const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};

export { AuthProvider, useAuth, AuthContext };
