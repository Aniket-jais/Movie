import  {useState} from "react";

const useInput = (defaultValue) => {

    const [inputValue, setInputValue] = useState(defaultValue);

    const handleChange = (e) => {
        const {name, value} = e?.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        })
    }
    return{
        inputValue,
        handleChange,
    }

}

export default useInput;