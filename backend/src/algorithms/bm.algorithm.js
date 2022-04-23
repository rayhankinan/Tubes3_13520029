const buildLast = (pattern) => {
	const last = {
		"A": -1,
		"C": -1,
		"G": -1,
		"T": -1
	}

	for (let i = 0; i < pattern.length; i++) {
		last[pattern.charAt(i)] = i
	}

	return last
}

const bm = (text, pattern) => {
	const n = text.length
	const m = pattern.length
	const last = buildLast(pattern)

	let i = m - 1
	let j = m - 1

	if (i > n - 1) {
		return -1
		
	} else {
		do {
			if (pattern.charAt(j) === text.charAt(i)) {
				if (j === 0) {
					return i
				} else {
					i--
					j--
				}
			} else {
				const lo = last[text.charAt(i)]
				i += m - Math.min(j, 1 + lo)
				j = m - 1
			}
		} while (i <= n - 1)

		return -1
	}
}

module.exports = (text, pattern) => {
	return bm(text, pattern) !== -1
}