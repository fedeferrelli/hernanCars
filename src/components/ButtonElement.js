import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    background: rgb(178, 25, 25);
    white-space: nowrap;
    padding: 14px 48px;
    color: black;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-item: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover{
        transition: all 0.2s ease-in-out;
        background: rgb(220, 68, 68)

    }
`