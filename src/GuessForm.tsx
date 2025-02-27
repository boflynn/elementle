import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Element from "./Element";

interface GuessFormProps {
  onGuess: (guess: string) => void;
  elements: Element[];
}

export default function GuessForm({ onGuess, elements }: GuessFormProps) {
  const [, setName] = useState("");

  function makeGuess(guess: string | undefined): void {
    if(guess === undefined) {
      return;
    }

    onGuess(guess!);
    setName("");
  }

  // Ideally, you can type whatever you want. If you highlight one and hit enter, it should be submitted
  // Upon submission, it should clear the field

  return (
    <div>
      <Autocomplete
        id="name"
        disablePortal
        options={elements.sort((a, b) => -b.name.localeCompare(a.name))}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Element" />}
        onChange={(_, newValue) => makeGuess(newValue!.name)}
      />
    </div>
  );
}
