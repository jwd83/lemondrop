/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import FuelForm from "../islands/FuelForm.tsx";
import Account from "../islands/Account.tsx";

export default function Greet(props: PageProps) {
  const [account, setAccount] = useState("");
  return (
    <div>
      <Header />
      <Account account={account} />
      <FuelForm />
    </div>
  );
}
