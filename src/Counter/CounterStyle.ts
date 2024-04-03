import styled from "styled-components";
import {FlexWrapper} from "../components/FlexWrapper";
import {theme} from "../styles/theme";

const NumWrapperStyle =  styled.div`
    border: 1px solid ${theme.color.accent};
    height: 100%;
    width: 100%;
    padding: 10px;
    
    & > h1 {
        text-align: center;
    }
`
const ButtonWrapperStyle =  styled(FlexWrapper)`
    border: 1px solid ${theme.color.accent};
    height: 100%;
    width: 100%;
    padding: 10px;
`

const CounterWrapperStyle = styled(FlexWrapper)`
    border: 1px solid ${theme.color.accent};
    padding: 10px;
    border-radius: 10px;
    width: 700px;
`

type H1TypeProps = {
    $color: string
}

const StyledH1 = styled.h1<H1TypeProps>`
    color: ${props => props.$color};
`

type StyledInputProps = {
    $bgc: string
}

const StyledInput = styled.input.attrs(({type})=>({
    type: type || 'number',
}))<StyledInputProps>`
    background-color: ${props => props.$bgc || 'white'};
`

export const S = {
    NumWrapperStyle,
    ButtonWrapperStyle,
    CounterWrapperStyle,
    StyledH1,
    StyledInput,
}