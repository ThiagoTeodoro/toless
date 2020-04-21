/**
 * Service to Generate a Randomic Hash with a length
 * 
 * @param {*} length of hash
 */
module.exports = (hashLength) => {

    const characters = "0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    let string = "";
    
    for (let i = 1; i <= hashLength; i++) {
        
      string += characters[Math.floor(Math.random() * characters.length)];
    }

    return string;
}