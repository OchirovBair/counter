import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/theme";
//
const InputWrapperStyle =  styled.div`
    border: 1px solid ${theme.color.accent};
    height: 100%;
    width: 100%;
    padding: 10px;
    
    & > div > span {
        font-size: 15px;
        font-weight: bold;
        white-space: nowrap;
    }
`
const ButtonWrapperStyle =  styled(FlexWrapper)`
    border: 1px solid ${theme.color.accent};
    height: 100%;
    width: 100%;
    padding: 10px;
`
//
const CounterSettingsWrapperStyle = styled(FlexWrapper)`
    border: 1px solid ${theme.color.accent};
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    max-height: 150px;
    height: 100%;
`

type StyledInputProps = {
    $bgc: string
}

const StyledInput = styled.input.attrs(({type})=>({
    type: type || 'number',
}))<StyledInputProps>`
    background-color: ${props => props.$bgc || 'white'};
    text-align: center;
`

export const S = {
    InputWrapperStyle,
    ButtonWrapperStyle,
    CounterSettingsWrapperStyle,
    StyledInput,
}