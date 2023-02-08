export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const validate = (formValue={}) => {
    let errors = {};
    if(formValue?.email &&!emailRegex.test(formValue.email)){
        errors.email = 'Email must be valid email address';
    }
    if(formValue?.password && !passwordRegex.test(formValue.password)){
        errors.password = 'Password size limitation between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)';
    }
    return errors;
}
