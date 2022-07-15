/** @jsx h */
import { h } from "preact";
import FuelForm from "../islands/FuelForm.tsx";
import Header from "../islands/Header.tsx";
import MealItem from "../islands/MealItem.tsx";
import SignUp from "../islands/SignUp.tsx";
import Total from "../islands/Total.tsx";

export default function Home() {
  return (
    <div>
      <Header />
      <SignUp />
      <section>
        <h2>Sample Meal History</h2>
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
      </section>
    </div>
  );
}
