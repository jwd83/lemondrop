/** @jsx h */
import { h } from "preact";

export default function Header() {
  return (
    <div>
      <head>
        <title>Lemon Drop</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <a href="https://fresh.deno.dev/docs/introduction">
        <img
          id="logo"
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </a>
      <h1>
        Lemon Drop
      </h1>
      <p>
        <h2>Dropping the 🎤 on calories</h2>
      </p>
    </div>
  );
}
