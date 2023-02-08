import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
    align-items: center;
`;

export const FormLabel = styled.label`
    color: grey;
`;

export const FormErroLabel = styled.p`
    margin:0;
    color: red;
`;

export const FormButton = styled.button`
    background: #2874f0;
    color: white;
    width: 20rem;
    height: 3rem;
    margin: 2rem 0;
    border-radius: 2rem;

    :disabled {
        background: grey;
    }
`;