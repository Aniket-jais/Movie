import React, { memo } from "react";
import * as Styled from './Input.style';

const Input = ({inputType,inputName,handleChange,inputValue, inputPlaceholder}) => {
    return(
        <Styled.InputWrapper type={inputType} name={inputName} onChange={handleChange} value={inputValue} placeholder={inputPlaceholder}/>
    )
}

export default memo(Input);