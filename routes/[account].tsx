/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import FuelForm from "../islands/FuelForm.tsx";
import Account from "../islands/Account.tsx";

export default function AccountHome(props: PageProps) {
  return (
    <div>
      <Header />
      <Account account={props.params.account} />
      <FuelForm />
    </div>
  );
}
