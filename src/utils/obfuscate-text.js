/**
 * This function receives a string and returns an obfuscated version of it
 * @param {string} text
 * @returns {string}
 */
export const obfuscateText = (text) => {
    return text
        .split('')
        .map(() => {
            return Math.random() < 0.5
                ? text.charAt(Math.floor(Math.random() * text.length))
                : '█▓$░'[Math.floor(Math.random() * 4)];
        })
        .join('');
};