/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

/**
 * Display the current account number and allow the user to change it.
 */

interface AccountProps {
  account: string;
}

export default function Account(props: AccountProps) {
  const [account, setAccount] = useState(props.account);

  return (
    <div id="account">
      <form action="todo">
        <span id="person-icon">🕴️</span>
        <input
          type="text"
          name="user"
          id="user"
          value={account}
          maxLength={16}
        />
        <button>♻️</button>
        <br></br>
      </form>
    </div>
  );
}
