"use client";

import { useContext, useState, useEffect } from "react";
import { ApiContext } from "@context/api.context";
import {
  getLoginUrl,
  generateVerifier,
  generateChallenge,
} from "@services/api.service";

const Home = () => {
  const [login, setLogin] = useState("");

  const {
    base_url,
    client_id,
    redirect_uri,
    scope,
    code_verifier,
    code_challenge,
    setVerifier,
    setChallenge,
  } = useContext(ApiContext);
  const apiContext = useContext(ApiContext);

  const Login = async () => {
    const verifier = generateVerifier();
    const challenge = await generateChallenge(verifier);
    localStorage.setItem("code_verifier", verifier);
    localStorage.setItem("code_challenge", challenge);
    setVerifier(verifier);
    setChallenge(challenge);
  };
  useEffect(() => {
    Login();
  }, []);
  return (
    <div>
      <h1>This is a rockola project </h1>
      <button onClick={Login}>get Login</button>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&code_verifier=${code_verifier}&code_challenge=${code_challenge}&response_type=code&code_challenge_method=S256`}
      >
        LOOOOOGIN
        {`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&code_verifier=${code_verifier}&code_challenge=${code_challenge}&response_type=code&code_challenge_method=S256`}
      </a>
    </div>
  );
};
export default Home;
