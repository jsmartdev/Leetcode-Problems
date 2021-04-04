/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    if (strs.length > 0) {
    for (let i = 0; ; i++) {
        const common = strs[0][i]
        if (!common) { return prefix }
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== common) {
            return prefix;
            }
        }
        prefix += common;
    }
    }
    return prefix
};