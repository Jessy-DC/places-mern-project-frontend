import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import { useForm } from "../../shared/hooks/form-hook";
import '../../places/pages/PlaceForm.css'
import './Auth.css'

const Auth = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })
    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //send this to the backend
    }

    return <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
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
                <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
            </form>
    </Card>
}

export default Auth;