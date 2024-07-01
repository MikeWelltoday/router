import React from 'react';
import {useParams} from "react-router-dom";
import {showData} from "data";

export const Model = () => {

    const {id, model} = useParams<{ id: string, model: string }>();


    const char = showData.find(item => item.id === id && item.model === model);


    return (

        <>
            {char ? (
                <div>
                    <h2>Model: {char.model}</h2>
                    <p>Price: {char.price}</p>
                    <p>Color: {char.color}</p>
                </div>
            ) : (
                <div>NO INFO</div>
            )}
        </>
    );
};
