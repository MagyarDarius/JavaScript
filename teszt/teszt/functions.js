function isValid(grade){
    return grade >= 1 && grade <= 5
}
function getLongerWord(word1, word2){
    if(word1.length > word2.length) return word1
    if(word2.length > word1.length) return word2
    return "egyforma"
}
function isOpen(hour) {
    return hour >= 8 && hour < 16
}
function inNegative(numbers){
    for(const number of numbers){
        if (number < 0) return true
    }
    return false
}
function changeVowels(word){
    const vowels = "aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ";
    let result = ""
    word.split("").forEach(char => {
        if (vowels.includes(char)) {
            result += ".";
        } else {
            result += char;
        }
    });

    return result;
}
function kerulet(a, ...args){
    if(args.length === 0){

        return 4 * a;
    } else if(args.length === 1){

        return 2 * (a + args[0]);
    } else if(args.length === 2){

        return a + args[0] + args[1];
    } else {

        let sum = a;
        for(const side of args){
            sum += side;
        }
        return sum;
    }
}
module.exports = { isValid, getLongerWord, isOpen, inNegative, changeVowels, kerulet };
