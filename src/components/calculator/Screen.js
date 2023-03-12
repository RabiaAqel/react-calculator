import { AutoTextSize } from 'auto-text-size'
import styled from 'styled-components'

import colors from '../../consts/theme/colors'


const Screen = ({ value }) => {
	return (
		<div style={{ maxWidth: '100%', height: '20rem', margin: '0 auto', minFontSizePx: '18px' }}>
			<StyledTextField>
				{value}
			</StyledTextField>
		</div>
	)
}

const StyledTextField = styled(AutoTextSize)`
    height: 5rem;
    margin-bottom: 8rem;
    color: ${ colors.gray.gray1 };
    padding: 0.5rem;
`

export default Screen
