import { useState } from "react";
import { Input, Grid } from "@nextui-org/react";


export default function CustomInput() {
  // init State
  const [form, setForm] = useState({
    name: 'initName',
    ingredient: [
      {
        ingredientName: '',
        amount: ''
      },
    ],
    steps: [
      ''
    ]
  });
  
  // form config
  const formConfig = [
    {
      key: 'name',
      label: 'Name',
      placeholder: 'Recipe name',
    },
    {
      key: 'ingredient',
      label: 'Ingredient',
      placeholder: 'ingredient name',
    }
  ];
  const handleFieldChange = ({ target }, fieldName) => {
    setForm(Object.assign(form, {
      [fieldName]: target.value
    }))
  }


  return (
    <Grid.Container gap={4}>
      {formConfig?.map(field => (
        <Grid key={field.key}>
          {console.log('from temp', form[field.key])}
          <Input
            key={field.key}
            initialValue={form[field.key]}
            onChange={(e) => handleFieldChange(e, field.key)}
            {...field}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
}
