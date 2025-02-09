"use client";
import { useState } from "react";
import localFont from "next/font/local";
import { ApiContext } from "@context/api.context";
import { generateChallenge, generateVerifier } from "@services/api.service";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const base_url = "https://accounts.spotify.com";
  const client_id = "97b922488a484c529883e0f230e9d308";
  const redirect_uri = "http://localhost:3000/auth";

  const scope = "user-read-private user-read-email";

  const [verifier, setVerifier] = useState("");
  const [challenge, setChallenge] = useState("");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApiContext.Provider
          value={{
            base_url,
            client_id,
            redirect_uri,
            scope,
            code_verifier: verifier,
            code_challenge: challenge,
            setVerifier: setVerifier,
            setChallenge: setChallenge,
          }}
        >
          {children}
        </ApiContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
