import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    background: rgb(30,75,20);
    white-space: nowrap;
    padding: 14px 48px;
    color: white;
    text-transform: uppercase ;
    
    letter-spacing: 2px;
    font-size: 20px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-item: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;


    &:hover{
        transition: all 0.2s ease-in-out;
        background: rgb(40,65,35);
    }
`