import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/theme";

const NumWrapperStyle =  styled.div`
    border: 2px solid ${theme.color.accent};
    height: 100%;
    width: 100%;
    padding: 10px;
    
    & > h1 {
        text-align: center;
    }
`
const ButtonWrapperStyle =  styled(FlexWrapper)`
    border: 2px solid ${theme.color.accent};
    height: 100%;
    width: 100%;
    padding: 10px;
`

const CounterDisplayWrapperStyle = styled(FlexWrapper)`
    border: 2px solid ${theme.color.accent};
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    max-height: 155px;
    height: 100%;
`

type H1TypeProps = {
    $color: string
}

const StyledH1 = styled.h1<H1TypeProps>`
    color: ${props => props.$color};
`



export const S = {
    NumWrapperStyle,
    ButtonWrapperStyle,
    CounterDisplayWrapperStyle,
    StyledH1,
}