import React, { useEffect, useState, memo } from "react";
import { validate } from "../../helpers/helper";
import useInput from "../../hooks/useInput";
import Input from "../Input";
import * as Styled from './Form.style';

const Form = ({handleSubmit}) => {
    const defaultValue = { email: '', password: '' };
    const { inputValue, handleChange } = useInput(defaultValue);
    const [error, setError] = useState({});
    const [isDisable, setIsDisable] = useState(true);

    useEffect(() => {
        inputValue.email !== '' && inputValue.password !== '' && Object.keys(error).length === 0
            ? setIsDisable(false) : setIsDisable(true)
    }, [error, inputValue]);

    return (
        <Styled.FormWrapper>
            <Input
                inputType='text'
                inputName='email'
                inputPlaceholder='Enter email'
                handleChange={(e) => { handleChange(e); setError(validate(inputValue)); }}
                inputValue={inputValue?.email}
            />
            {error?.email && <Styled.FormErroLabel>{error?.email}</Styled.FormErroLabel>}
            <Input
                inputType='password'
                inputName='password'
                inputPlaceholder='Enter password'
                handleChange={(e) => { handleChange(e); setError(validate(inputValue)); }}
                inputValue={inputValue?.password}
            />
            {error?.password && <Styled.FormErroLabel>{error?.password}</Styled.FormErroLabel>}
            <Styled.FormButton disabled={isDisable} onClick={(e)=>handleSubmit(e,inputValue)}>Submit</Styled.FormButton>
        </Styled.FormWrapper>
    )
}

export default memo(Form);