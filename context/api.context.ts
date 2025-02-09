"use client";
import { ContextType, createContext, Dispatch, SetStateAction } from "react";
export type ApiContextType = {
    base_url: string;
    client_id: string;
    redirect_uri: string;
    scope: string;
    code_verifier: string;
    code_challenge: string;
    setVerifier: Dispatch<SetStateAction<string>>;
    setChallenge: Dispatch<SetStateAction<string>>;
};

export const ApiContext = createContext<ApiContextType>({
    base_url: "",
    client_id: "",
    redirect_uri: "",
    scope: "",
    code_verifier: "",
    code_challenge: "",
    setVerifier: () => {},
    setChallenge: () => {},
});
