import '../styles/globals.css'

import { AuthConfig } from "react-use-auth";
import { Auth0 } from "react-use-auth/auth0";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <AuthConfig
                authProvider={Auth0}
                navigate={(url) => router.push(url)}
                params={{
                    domain: "useauth.auth0.com",
                    clientID: "GjWNFNOHqlino7lQNjBwEywalaYtbIzh"
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
