const lcss = (text, pattern) => {
    const n = text.length
    const m = pattern.length
    const dp = new Array(n + 1)

    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(m + 1).fill(0)
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            } else if (text.charAt(i - 1) === pattern.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[n][m]
}

module.exports = (text, pattern) => {
    return lcss(text, pattern) / pattern.length
}