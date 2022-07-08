/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface MealItemProps {
  name: string;
  calories: number;
  unit: string; // the unit of measurement for total weight/volume consumed
  value: number; // the value associated with the unit of measurement for total weight/volume consumed
  quantity: number;
}

export default function MealItem(props: MealItemProps) {
  //   const [count, setCount] = useState(props.start);
  const name = props.name;
  const calories = props.calories;
  const unit = props.unit;
  const quantity = props.quantity;
  const value = props.value;
  const totalCalories = calories * quantity;
  const totalUnits = quantity * value;

  return (
    <div style="max-width: 600px; text-align:left; margin: auto; line-height: 1.8em;">
        {quantity}x {name}{" "}
        <em style="font-size: 0.8em;">({totalUnits} {unit})</em>

        <span style="float: right;">{totalCalories} kCals</span>
    </div>
  );
}
