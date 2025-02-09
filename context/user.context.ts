import { createContext } from "react";

export type ApiContext = {
    client_id: string,
    redirect_uri: string,
    code_challenge: string,
};


export const userContext = createContext({

})
