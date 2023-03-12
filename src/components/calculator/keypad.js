import Key from './Key'
import KeyBox from './KeyBox'

const btnValues = [
	[ 7, 8, 9, '*' ],
	[ 4, 5, 6, '/' ],
	[ 1, 2, 3, '+' ],
	[ 0, 'C', '=', '-' ],
]

const KeyPad = ({ onClick, operators }) => {

	return (
		<KeyBox>
			{btnValues.flat().map((btn, i) => {
				return (
					<Key
						key={i}
						className={operators.has(btn) && 'operator'}
						value={btn}
						onClick={
							(e) => onClick(e)
						}
					/>
				)
			})}
		</KeyBox>
	)
}

export default KeyPad
