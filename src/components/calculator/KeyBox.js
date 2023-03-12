import styled from 'styled-components'

const KeyBox = ({ children }) => {
	return <Box>{children}</Box>
}

const Box = styled.div`
    width: 100%;
    height: calc(100% - 28rem);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;
`

export default KeyBox
