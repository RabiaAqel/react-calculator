import styled from 'styled-components'

import colors from '../consts/theme/colors'
import { fontSizes } from '../consts/theme/typography'

export const StyledButton = styled.button`
    width: 35rem;
    height: 4rem;
    background-color: #FFFFFF;
    border: 0;
    border-radius: .5rem;
    box-sizing: border-box;
    color: ${ colors.gray.gray2 };
    font-size: ${ fontSizes.xl };
    font-weight: 400;
    line-height: 1.25rem;
    padding: .75rem 1rem;
    text-align: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition-duration: 0.5s;

    :hover {
    color: ${ colors.green.green1 };
    background-color: rgb(249,250,251);
    }

`
