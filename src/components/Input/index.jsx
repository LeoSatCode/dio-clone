import React from "react";

import { InputContainer, IconContainer, InputText } from "./styles";

const Input = ({letfIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {letfIcon? (<IconContainer>{letfIcon}</IconContainer>) : null}
        <InputText {...rest} />
    </InputContainer>
  )
}

export { Input };
