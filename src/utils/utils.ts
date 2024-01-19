
export function formatCamelCaseToUpperCase(data: string) {
	return data.split('').map((char, key) => {
		if (key !== 0 && char === char.toUpperCase()) {
			return [' ', char]
		} else {
			return char
		}
	}).flat()
		.join('')
		.split(' ')
		.map((char: string) => {
			const charString = char.split('')
			charString.shift()
			return char.split('').shift()?.toUpperCase() + charString.join('')
		}).join(' ')
}