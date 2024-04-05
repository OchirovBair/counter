import styled from "styled-components";
import {FlexWrapper} from "../components/FlexWrapper";
import {theme} from "../styles/theme";

const CounterWrapperStyle = styled(FlexWrapper)`
    padding: 10px;
    width: 100%;
    height: 100vh;
    background-color: ${theme.color.bgc};
    color: ${theme.color.accent};
`


export const S = {
    CounterWrapperStyle,
}