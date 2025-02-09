import { ApiContextType } from "@context/api.context";

export const generateVerifier = (): string => {
    const length = 96;
    let randomString = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        randomString += possible.charAt(
            Math.floor(Math.random() * possible.length),
        );
    }
    return btoa(randomString)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
};

export const generateChallenge = async (
    code_verifier: string,
): Promise<string> => {
    const hashArray = await crypto.subtle.digest(
        { name: "SHA-256" },
        new TextEncoder().encode(code_verifier),
    );
    const uIntArray = new Uint8Array(hashArray);
    const numberArray = Array.from(uIntArray);
    const hashString = String.fromCharCode.apply(null, numberArray);
    return btoa(hashString)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
};

export const getLoginUrl = async ({
    client_id,
    scope,
    redirect_uri,
    code_verifier,
    code_challenge,
}: ApiContextType) => {
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = {
        response_type: "code",
        client_id,
        scope,
        code_challenge_method: "S256",
        redirect_uri,
        code_verifier,
        code_challenge,
    };

    authUrl.search = new URLSearchParams(params).toString();

    return authUrl;
};
