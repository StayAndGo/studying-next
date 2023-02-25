import React from 'react';
import { Input } from '@nextui-org/react'

export default function ArrayField(props) {
  const arrayData = props.arrayData || {};
  const arrayProps = props.arrayProps;

  return (
    <div>
     {
      arrayData.map((item, index) => {
        const inputList = [];
        for(const fieldName in item) {
          inputList.push(
          <Input
            key={fieldName}
            {...arrayProps[fieldName]}
          />
          );
        }
        return <React.Fragment key={index}>{inputList}</React.Fragment>
      })
     }
    </div>
  )
}