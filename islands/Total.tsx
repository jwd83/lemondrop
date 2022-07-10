/** @jsx h */
import { h } from "preact";

interface TotalProps {
  calories: number;
}

export default function Total(props: TotalProps) {
  //   const [count, setCount] = useState(props.start);
  const calories = props.calories;

  return (
    <div style="max-width: 600px; text-align:left; margin: auto; line-height: 1.8em;">
      <hr />
      <span style="font-size: 1.5em">
        <b>Total</b>
        <span style="float: right; ">{calories} kCals</span>
      </span>
    </div>
  );
}
