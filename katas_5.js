function isPangram(string) {
    const chars = string.replace(/[^a-zA-Z]/g, "").toLowerCase()
    const unique = new Set(chars)
    return unique.size === 26
 
}

module.exports = { isPangram }