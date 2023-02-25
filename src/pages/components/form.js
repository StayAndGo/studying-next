import { useState } from "react";
import { Input, Grid } from "@nextui-org/react";
import ArrayField from "./array-field";


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
      props: {
        label: 'Name',
        placeholder: 'Recipe name',
      }
    },
    {
      key: 'ingredient',
      props: {
        label: 'Ingredient',
        placeholder: 'ingredient name',
      },
      fieldType: 'string'
    },
  ];
  const handleFieldChange = ({ target }, fieldName) => {
    setForm(prevState => ({
      ...prevState,
      [fieldName]: target.value
    }))
  }


  return (
    <Grid.Container gap={4}>
      {formConfig?.map(field => (
        <Grid key={field.key}>
          {
            field?.fieldType === 'string' ?
            // array input group
            <ArrayField array-data={form[field.key]} /> :

            // single input
            <Input
              initialValue={form[field.key]}
              onChange={(e) => handleFieldChange(e, field.key)}
              {...field.props}
            />
          }
        </Grid>
      ))}
    </Grid.Container>
  );
}
