"use client";

import "../styles/output.css";
import Navigation from "../components/navigation";
import AccountContext, { Account } from "../context/account";
import { useEffect, useState } from "react";

export default function Root({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("account");
    if (data) {
      setAccount(JSON.parse(data));
    }
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account: account,
        setAccount: (account: Account | null) => {
          if (account) {
            localStorage.setItem("account", JSON.stringify(account));
          } else {
            localStorage.removeItem("account");
          }
          setAccount(account);
        },
      }}
    >
      <html lang="en">
        <body>
          <Navigation />
          {children}
        </body>
      </html>
    </AccountContext.Provider>
  );
}
