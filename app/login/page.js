"use client";
import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from 'react';

export default function LoginPage() {

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async() => {
            const res = await getProviders();
            console.log("RESULT: ", res)
            setProviders(res);
        })();
    }, []);

    return (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <div className="flex items-center justify-center h-screen" key={provider.id}>
                <button
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </>
      );
    };