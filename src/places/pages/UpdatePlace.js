import React from "react";
import { useParams } from 'react-router-dom'

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import './PlaceForm.css'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky crapers in the world !',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/260px-Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address: '20 W 34th St, New York, NY 10001, United-States',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky crapers in the world !',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/260px-Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address: '20 W 34th St, New York, NY 10001, United-States',
        location: {
            lat: 40.748817,
            lng: -73.985428
        },
        creator: 'u2'
    }
]

const UpdatePlace = props => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true)

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    }

    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
        />
        <Input
            id="description"
            element="textarea"
            type="text"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
}

export default UpdatePlace