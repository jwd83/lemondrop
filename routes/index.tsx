/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import MealItem from "../islands/MealItem.tsx";

export default function Home() {
  return (
    <div style="text-align: center;">
      <head>
        <title>Lemon Drop</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <a href="https://fresh.deno.dev/docs/introduction">
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </a>
      <p>
        <h1>Lemon Drop</h1>
        <h2>Dropping the 🎤 on calories</h2>
      </p>
      <div>
        <h2>Give Me Fuel ⛽</h2>
        <form style="line-height: 2em;">
          <label>I ate...</label>
          <br />

          <input
            type="text"
            name="quantity"
            placeholder="1"
            style="width: 3em;"
          />{" "}
          x <input type="text" name="name" placeholder="Apple" /> (s) <br />

          <label>that contained...</label>
          <br />

          <input type="text" name="calories" placeholder="" />
          <label>
            {" "}
            <abbr>calories</abbr>.
          </label>
          <br />
          <input type="checkbox" name="extra" style="margin-top: 3em;" />
          Advanced
          <br />
          <button style="margin-top: 3em;">Give Me Fire 🔥</button>
        </form>
      </div>
      <h2>Meal History</h2>
      <MealItem
        name="🍎 Apple"
        calories={95}
        value={182}
        unit="g"
        quantity={1}
      />
      <MealItem
        name="🍌 Banana"
        calories={105}
        value={118}
        unit="g"
        quantity={1}
      />
      <MealItem
        name="🥚 Boiled Egg"
        calories={78}
        value={50}
        unit="g"
        quantity={1}
      />

      {/* <Counter start={3} /> */}
    </div>
  );
}
