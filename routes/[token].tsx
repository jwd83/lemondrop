/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import FuelForm from "../islands/FuelForm.tsx";
import Account from "../islands/Account.tsx";

export default function Greet(props: PageProps) {
  return (
    <div>
      <Header />
      <Account />
      <FuelForm />
      {props.params.token}
    </div>
  );
}
