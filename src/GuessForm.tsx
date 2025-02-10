import { FormEvent, useState } from "react";

export default function GuessForm({ onGuess }: { onGuess: (guess: string) => void }) {
  const [name, setName] = useState("");
  
  function onSearchSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    onGuess(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <label htmlFor="name">Element Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Rubidium"
          onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
