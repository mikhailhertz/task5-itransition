import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading && isAuthenticated) {
        return (
            <main class="container h-100 d-flex justify-content-center align-items-center">
                Loading...
            </main>);
    }
    if (isAuthenticated) {
        return (
            <main class="container h-100 d-flex justify-content-center align-items-center">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </main>
        );
    }
    else {
        return (
            <main class="container h-100 d-flex justify-content-center align-items-center">
                You are not logged in.
            </main>
        );
    }
};

export default Profile;