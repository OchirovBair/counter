import styled from "styled-components";
import {FlexWrapper} from "./components/FlexWrapper";
import {theme} from "./styles/theme";

const AppStyle = styled(FlexWrapper)`
    height: 100vh;
    background-color: ${theme.color.bgc};
    color: ${theme.color.accent};
`

export const S = {
    AppStyle,
}