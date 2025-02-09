import { ApiContextType } from "@context/api.context";

export const getToken = (
    { client_id, redirect_uri, base_url }: ApiContextType,
    code: string,
    code_verifier: string,
) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id,
            grant_type: "authorization_code",
            code,
            redirect_uri,
            code_verifier,
        }),
    };

    return fetch(`${base_url}/api/token`, config).then((response) =>
        response.json(),
    );
};
