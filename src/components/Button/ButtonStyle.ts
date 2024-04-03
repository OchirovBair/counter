import styled from "styled-components";
import {theme} from "../../styles/theme";

type ButtonPropsType = {
    $isDisabled: boolean
}

const ButtonStyle = styled.button<ButtonPropsType>`
    padding: 5px;
    background-color: ${theme.color.accent};
    font-weight: 700;
    color: ${theme.color.bgc};
    font-size: 20px;
    border-radius: 10px;
    border-style: none;


    ${props => props.$isDisabled
            ? `transform: scale(90%);
            background-color: ${theme.color.error.bgc};`
            : `&:hover {
                    transform: scale(105%);
                }
    
                &:active {
                    transform: scale(100%);
                }`
    }
`

export const S = {
    ButtonStyle,
}