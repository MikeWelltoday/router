import React from 'react';
import {useParams} from "react-router-dom";

export const Model = () => {

    const {id, model} = useParams();

    console.log(id, model);

    return (
        <div>
            Model
        </div>
    );
};
