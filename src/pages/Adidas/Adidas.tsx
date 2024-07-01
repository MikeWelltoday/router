import React from 'react';
import {showData} from "data";
import {Link} from "react-router-dom";

export const Adidas = () => {


    return (
        <div>
            <ul>
                {showData.map(item => (
                    <li key={item.id}>
                        <Link to={'/model/' + item.model + '/' + item.id}>{item.model}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};
