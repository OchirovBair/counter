import styled from "styled-components";
import {theme} from "../../styles/theme";
import {ComponentPropsWithoutRef} from "react";

type ButtonPropsType = ComponentPropsWithoutRef<'button'>

export const Button = styled.button<ButtonPropsType>`
    padding: 5px 10px;
    background-color: ${theme.color.accent};
    font-weight: 700;
    color: ${theme.color.bgc};
    font-size: 20px;
    border-radius: 10px;
    border-style: none;
    
    
    &:disabled {
        transform: scale(90%);
        background-color: ${theme.color.error.bgc};
    }
    
    &:not(&:disabled) {
        &:hover {
            transform: scale(105%);
        }

        &:active {
            transform: scale(100%);
        }
    }

   
`