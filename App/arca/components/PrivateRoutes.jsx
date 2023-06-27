import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "./Context";

function PrivateRoute({ children }) {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/Login", { replace: true });
    }
  }, [navigate, token]);

  if (!token) {
    return null;
  }

  return children;
}

export default PrivateRoute;

