/** @jsx h */
import { h } from "preact";
import "https://deno.land/x/dotenv/load.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import postgres from "https://deno.land/x/postgresjs/mod.js";

interface myData {
  value: string;
}

export const handler: Handlers<myData | null> = {
  async GET(_, ctx) {
    const sql = postgres({ ssl: true });
    const data = await sql`
    SELECT * FROM public.meal_items
    ORDER BY id ASC `;

    console.log(data);

    const some_data: myData = {
      value: JSON.stringify(data),
    };

    return ctx.render(some_data);
  },
};

export default function Page({ data }: PageProps<myData | null>) {
  if (!data) {
    return <h1>I found no data</h1>;
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h2>data was {data.value}</h2>
    </div>
  );
}
