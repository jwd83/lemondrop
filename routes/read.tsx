/** @jsx h */
import { h } from "preact";
import "https://deno.land/x/dotenv/load.ts";
import postgres from "https://deno.land/x/postgresjs/mod.js";

// const sql = postgres("postgres://username:password@host:port/database", {
//   host: "", // Postgres ip address[s] or domain name[s]
//   port: 5432, // Postgres server port[s]
//   database: "", // Name of database to connect to
//   username: "", // Username of database user
//   password: "", // Password of database user
// });

export default function Greet() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{Deno.env.get("PGUSER")}</h2>
    </div>
  );
}
