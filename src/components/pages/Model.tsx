import React, {FC} from 'react'
import {useParams} from 'react-router-dom'
import {AdidasItem} from './Adidas'

type SuperPagePropsType = {
    data: AdidasItem[]
}

export const Model: FC<SuperPagePropsType> = (props) => {

    const params = useParams()

    const char = props.data[Number(params.id) - 1]

    return (
        char ?
            <>
                <p>{char.model}</p>
                <p>{char.collection}</p>
                <p>{char.price}</p>
                <img src={`${char.picture}`} alt="sry"/>
            </>
            :
            <h3>модель отсутствует</h3>
    )
}





