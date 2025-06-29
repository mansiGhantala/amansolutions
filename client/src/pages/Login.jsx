import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

// const URL = "http://localhost:5000/api/auth/login";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
  const {storeTokenInLS,API} = useAuth();

  const URL = `${API}/api/auth/login`;
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user, [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login form", response);

            const res_data = await response.json();

            if (response.ok) {
                // alert("Login successfull")
                //  stored the token in localhost
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
     toast.success("Login successful");

                navigate("/");
            } else {
                toast.error(res_data.extraDetails ?  res_data.extraDetails : res_data.message);
                
                console.log('invalid credential');
        }
        } catch (error) {
            console.log("login", error);
        };
    };

    return (<>
        <section>
            <main>
                <div className="section-login">
                    <div className="container">
                        <div className="login-image">
                            <img src="/images/login.png" alt="a girl with trying to do login" />
                        </div>

                        <div className="login-form">
                            <h1 className="main-heading mb-2">Login Form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" placeholder="ENTER YOUR E-MAIL" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" placeholder="PASSWORD" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                </div>
                                <br />
                                <button className="btn btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
    )
}

export default Login