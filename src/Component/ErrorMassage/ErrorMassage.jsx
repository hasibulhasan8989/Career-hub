import { Link } from "react-router-dom";


const ErrorMassage = () => {
    return (
        <div>
          <h1>Oops !!!</h1> 
          <Link to={'/'}> Go Back  </Link>
        </div>
    );
};

export default ErrorMassage;