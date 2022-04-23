const computeFail = (pattern) => {
    const m = pattern.length
    const fail = new Array(m)

    let i = 1
    let j = 0

    fail[0] = 0;
    while (i < m) {
        if (pattern.charAt(i) === pattern.charAt(j)) {
            fail[i] = j + 1;
            i++
            j++
        } else if (j > 0) {
            j = fail[j - 1]
        } else {
            fail[i] = 0
            i++
        }
    }

    return fail
}

module.exports = (text, pattern) => {
    const n = text.length
    const m = pattern.length
    const fail = computeFail(pattern)

    let i = 0
    let j = 0

    while (i < n) {
        if (pattern.charAt(j) === text.charAt(i)) {
            if (j === m - 1) {
                return i - m + 1;
            } else {
                i++
                j++
            }
        } else if (j > 0) {
            j = fail[j - 1]
        } else {
            i++;
        }
    }

    return -1
}