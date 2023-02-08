import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { setUser } from "../../redux/actions/user";

const Home = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e,userDetails)=>{
        e.preventDefault();
        dispatch(setUser(userDetails))
    }

    return(
        <Form handleSubmit={handleSubmit}/>
    )
}

export default Home;