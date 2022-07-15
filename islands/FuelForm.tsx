/** @jsx h */
import { h } from "preact";

export default function FuelForm() {
  return (
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
  );
}
