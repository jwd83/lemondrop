/** @jsx h */
import { h } from "preact";

/**
 * Display our sign up message about anonymous accounts
 */
export default function SignUp() {
  return (
    <div id="sign-up">
      {/* make a flex box */}

      <span id="person-icon">🕴️</span>

      We use anonymous accounts to track your meals. Generate your unique 16
      digit account number now.
      <br />
      Keep it secret, keep it safe.
      <button>♻️</button>
    </div>
  );
}
