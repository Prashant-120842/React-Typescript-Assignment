import React, { FormEvent } from "react";
import '../App.css';

async function sendForm(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const { name, password } = event.target as typeof event.target & {
    name: { value: string; };
    password: { value: string; };
  };

  console.log(name.value, password.value);
}


function App() {
  return (

    <div className="App">

      <h1>Login Form Using React Typescript</h1>

      <form className="wrap" onSubmit={evt => { sendForm(evt) }}>
        <fieldset className="field-area">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" required />
        </fieldset>
        <fieldset className="field-area">
          <label htmlFor="password">Pass: </label>
          <input type="password" id="password" required />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;