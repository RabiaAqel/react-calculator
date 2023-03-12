import styled from 'styled-components'

import colors from '../../consts/theme/colors'
import { fontSizes } from '../../consts/theme/typography'


const Key = ({ className, value, onClick }) => {
	return (
		<StyledButton onClick={onClick} operatorKey={className === 'operator'}>
			{value}
		</StyledButton>
	)
}

const StyledButton = styled.div`
    border: none;
    border: 1px ${ ({ operatorKey }) => operatorKey? colors.yellow.yellow2: colors.gray.gray1 } solid;
    font-size: ${ fontSizes.xxxl };
    color:  ${ colors.gray.gray1 };
    font-weight: 700;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.3s;

    &:hover {
        background-color: ${ ({ operatorKey }) => operatorKey? colors.yellow.yellow1 : colors.gray.gray1 };
        color:  ${ colors.basic.white };
    }

`


export default Key
