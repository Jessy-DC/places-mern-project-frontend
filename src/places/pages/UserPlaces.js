import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

import PlaceList from "../components/PlaceList";
import {useHttpClient} from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";


const UserPlaces = () => {
   const userId = useParams().userId;
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlaces, setLoadedPlaces] = useState();

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/places/user/60807fddcaeff04160e867e0'
                );

                setLoadedPlaces(responseData.places);
            } catch (err) {}
        };
        fetchPlaces();
    }, [sendRequest]);


   return (
       <React.Fragment>
           <ErrorModal error={error} onClear={clearError} />
           {isLoading && (
               <div className="center">
                   <LoadingSpinner />
               </div>
           )}
           {isLoading && loadedPlaces && <PlaceList items={loadedPlaces} /> }
       </React.Fragment>
   )
}

export default UserPlaces