/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

/**
 * Display the current account number and allow the user to change it.
 */
export default function Account() {
  const accNum = [];

  while (accNum.length < 16) {
    accNum.push(Math.floor(Math.random() * 10));
  }
  //   accNum.join("");
  let accNumStr = accNum.join("");

  return (
    <div id="account">
      <form action="todo">
        {
          /* <div>
          <label for="user">User</label>
        </div> */
        }
        {/* <input name="user" id="user" value="User ID"></input> */}
        <span id="person-icon">🕴️</span>
        <input
          type="text"
          name="user"
          id="user"
          value={accNumStr}
          maxlength="16"
        />
        {/* <input type="submit" value="Go!"></input> */}
        <button>♻️</button>
        <br></br>
      </form>
    </div>
  );
}
