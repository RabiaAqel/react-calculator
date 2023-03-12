const error = 'error'
const warn = 'warn'
const always = 'always'
const never = 'never'

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended', ],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module',
		requireConfigFile: false, // <== ADD THIS
		'babelOptions': {
			'presets': [ '@babel/preset-react' ]
		},
	},
	plugins: [ 'react', 'react-hooks' ],
	rules: {
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-console': warn,
		'indent': [ error, 'tab', {
			SwitchCase: 1
		} ],
		'linebreak-style': [ warn, 'windows' ],
		'quotes': [ error, 'single' ],
		'semi': [ error, never ],
		'brace-style': [ error, 'stroustrup' ],
		'object-curly-spacing': [ error, always ],
		'array-bracket-spacing': [ error, always ],
		'eol-last': [ warn, always ],
		'key-spacing': [ error, {
			beforeColon: false,
			afterColon: true
		} ],
		'template-curly-spacing': [ error, always ],
		'keyword-spacing': [ error, {
			after: true
		} ],
		'space-before-function-paren': [ error, {
			anonymous: never,
			named: never,
			asyncArrow: always,
		} ],
		'react/prop-types': 'off',
		'react-hooks/rules-of-hooks': error, 
	}, }
