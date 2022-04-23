exports.dnaMatching = (input) => {
    const sanitizedInput = new RegExp(/([^ACGT]+|[a-z]+|\s+)/, "g")
    return !sanitizedInput.test(input)
}

console.log(dnaMatching("ACGTAAAAAAAAACACACACACACACGT"));

exports.dateMatching = (input) => {
    // all date ?
    const allRegex = new RegExp(
        /^([12][0-9]|3[01]|0?[1-9])([-\\/\s])(1[0-2]|0?[1-9]|(januari|februari|maret|april|mei|juni|july|agustus|september|oktober|november|desember)\2\d{4})(\s([A-Za-z]+[-s]?)+[0-9]{0,2})?$/,
        "i"
    )
    const allDate = new RegExp(
        /^([12][0-9]|3[01]|0?[1-9])([-\\/\s])(1[0-2]|0?[1-9]|(januari|februari|maret|april|mei|juni|july|agustus|september|oktober|november|desember)\2\d{4})$/,
        "i"
    )
    const penyakit = new RegExp(/^([A-Za-z]+[-/.\s]?)+[0-9]{0,2}$/, "i")
}