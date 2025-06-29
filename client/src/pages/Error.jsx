import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <main className="section-error">
      <div className="error-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <button className="btn-home">Go Back Home</button>
        </Link>
      </div>
    </main>
  );
};

export default Error;
