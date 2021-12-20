import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
    <Auth0Provider
        domain="dev-tk8k8at7.us.auth0.com"
        clientId="K65Uibv49ncUWeQIzvX5MLrqCNowuF2M"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);
