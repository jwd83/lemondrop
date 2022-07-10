/** @jsx h */
import { h } from "preact";
import postgres from "https://deno.land/x/postgresjs/mod.js";

export default function Greet() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
