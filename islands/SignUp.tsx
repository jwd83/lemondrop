/** @jsx h */
import { h } from "preact";

/**
 * Display our sign up message about anonymous accounts
 */
export default function SignUp() {
  const accNum = [];

  while (accNum.length < 16) {
    accNum.push(Math.floor(Math.random() * 10));
  }
  //   accNum.join("");
  const accNumStr = "/" + accNum.join("");

  return (
    <div id="sign-up">
      <span id="person-icon">🕴️</span>
      <div id="account-statement">
        We use anonymous accounts to track your meals. Generate your unique 16
        digit account number now.
        <br />
        Keep it secret, keep it safe.
      </div>
      <a href={accNumStr}>
        <button>Go ♻️</button>
      </a>
    </div>
  );
}
