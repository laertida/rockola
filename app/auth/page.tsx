"use client";
import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { getToken } from "@services/login.service";
import { ApiContext } from "@context/api.context";

const Auth = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";

  const [token, setToken] = useState({});

  const apiContext = useContext(ApiContext);

  useEffect(() => {
    const verifier = localStorage.getItem("code_verifier") || "";
    getToken(apiContext, code, verifier).then((response) => {
      setToken(response);
    });
  }, []);

  return (
    <div>
      <p>hi {code}</p>
    </div>
  );
};

export default Auth;
