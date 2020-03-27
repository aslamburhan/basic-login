import React, {useEffect } from "react";
import { Link } from "react-router-dom";
function LogoutPage() {
  useEffect(() => {
    localStorage.setItem("token", "");
    localStorage.setItem("loggedIn", "false");
  }, [localStorage.setItem("token", "")]);
  return (
    <Link to="/">
      <button type="primary">Login Again</button>
    </Link>
  );
}
export default LogoutPage;
