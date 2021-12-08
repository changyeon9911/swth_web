import * as React from 'react';
import { logUserOut } from "../apollo";

export default function Main() {
    return(
    <div>
      <h1>Welcome we did it!</h1>
      <button onClick={() => logUserOut()}>Log out now!</button>
    </div>
    )
}