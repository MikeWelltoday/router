import styled from 'styled-components'

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    a {
        text-decoration: none;
        color: #1e3786;

        &.active {
            text-decoration: none;
            color: #03eaff;
        }

        //&:hover {
        //    color: steelblue; /* Цвет ссылки */
        //}
    }


`


export const S = {
    NavWrapper
}