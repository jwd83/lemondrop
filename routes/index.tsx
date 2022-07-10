/** @jsx h */
import { h } from "preact";
import Account from "../islands/Account.tsx";
import Counter from "../islands/Counter.tsx";
import MealItem from "../islands/MealItem.tsx";
import Total from "../islands/Total.tsx";

export default function Home() {
  return (
    <div style="text-align: center;">
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
      <Account />
      <section>
        <form>
          <h2>Give Me Fuel ⛽</h2>
          <label>I ate...</label>
          <br />

          <input
            class="input-number"
            type="number"
            name="quantity"
            placeholder="1"
            value="1"
            min="1"
          />{" "}
          x{" "}
          <input
            class="input-text"
            type="text"
            name="name"
            placeholder="Apple"
          />{" "}
          (s) <br />

          <label>that totaled...</label>
          <br />

          <input
            class="input-number"
            type="number"
            name="calories"
            placeholder=""
            min="0"
          />
          <label>
            {" "}
            <abbr>calories</abbr>.
          </label>
          <br />
          <br />
          <input type="checkbox" name="extra" />
          Advanced
          <br />
          <br />
          <button>Give Me Fire 🔥</button>
        </form>
      </section>
      <section>
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

        <Total calories={278} />
        <Counter start={0} />
      </section>
    </div>
  );
}
