"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    fetch(`http://localhost:5000/account/authorize`, { credentials: "include" })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return <h1 className="pt-24 text-3xl">Authorize</h1>;
}
