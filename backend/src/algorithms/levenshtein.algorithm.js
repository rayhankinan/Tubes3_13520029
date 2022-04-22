// use memoization (dp) because use same computation for subprolem
const levenshtein = (text, target) => {
  const n = text.length;
  const m = target.length;
  const dp = new Array(n + 1);

  //fill all table with 0 with text x target
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1).fill(0);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      // empty text insert target
      if (i == 0) {
        dp[i][j] = j;
      }
      // empty target insert text
      else if (j == 0) {
        dp[i][j] = i;
      }
      //if same no need computation
      else if (text[i - 1] === target[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
      // min of insert, delete, replace
      else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n][m];
};

// console.log(levenshtein("kitten", "sitting"));
// console.log(Math.min(1, 2, 3, 4));

export { levenshtein };
