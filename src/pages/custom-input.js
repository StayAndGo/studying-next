import React from "react";
import { Input, useInput, Grid } from "@nextui-org/react";


export default function App() {
  const { name, resetName, nameBindings } = useInput("");
  const { email, resetEmail, emailBindings } = useInput("");

  return (
    <Grid.Container gap={4}>
      <Grid>
        <Input
          {...nameBindings}
          clearable
          shadow={false}
          onClearClick={resetName}
          type="email"
          label="Name"
          placeholder="Your name"
        />
      </Grid>
      <Grid>
        <Input
          {...emailBindings}
          clearable
          shadow={false}
          onClearClick={resetEmail}
          type="email"
          label="Email"
          placeholder="With regex validation"
        />
      </Grid>
    </Grid.Container>
  );
}
