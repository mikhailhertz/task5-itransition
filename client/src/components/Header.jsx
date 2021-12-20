import React from "react";
import LoginButton from "./LoginButton.jsx"
import LogoutButton from "./LogoutButton.jsx"
import { useAuth0 } from "@auth0/auth0-react";

function ConditionalButton() {
  const { isAuthenticated } = useAuth0();
  return (isAuthenticated) ? <LogoutButton /> : <LoginButton />;
}

function Header() {
  return (
    <header className="header py-2 bg-dark">
      <div className="container">
        <div className="d-inline text-white fs-3">task5-itransition</div>
        <div className="d-inline float-end">
          <ConditionalButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
