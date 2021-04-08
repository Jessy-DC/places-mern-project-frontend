import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import { useForm } from "../../shared/hooks/form-hook";
import '../../shared/components/FormElements/Form.css'

const Auth = () => {
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })
    const userAuthHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the backend
    }

    return <form className="place-form" onSubmit={userAuthHandler}>
        <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email."
            onInput={inputHandler}
        />
        <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(7)]}
            errorText="Please enter a solid password (at least 7 characters)."
            onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>SIGN IN</Button>
    </form>
}

export default Auth;