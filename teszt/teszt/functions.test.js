const {isValid, getLongerWord, isOpen, inNegative, changeVowels, kerulet} = require('./functions');
test('valid grade', () =>{
    expect(isValid(1)).toBeTruthy();
    expect(isValid(2)).toBeTruthy();
    expect(isValid(3)).toBeTruthy();
});
test('not valid grade', () =>{
    expect(isValid(0)).toBeFalsy();
    expect(isValid(6)).toBeFalsy();
    expect(isValid(-3)).toBeFalsy();
});
test('word1 longer', () =>{
    expect(getLongerWord("elefánt", "cica")).toBe("elefánt")
    expect(getLongerWord("asztal", "asztalterítő")).toBe("asztalterítő")
});
test('word2 longer', () =>{
    expect(getLongerWord("elefánt", "cicamica")).toBe("cicamica")
    expect(getLongerWord("asztal", "asztalterítő")).toBe("asztalterítő")
});
test('are of equal length', () =>{
    expect(getLongerWord("elefánt", "parkoló")).toBe("egyforma")
    expect(getLongerWord("asztal", "tányér")).toBe("egyforma")
});
test('is open',() => {
    expect(isOpen(9)).toBeTruthy()
    expect(isOpen(14)).toBeTruthy()
    expect(isOpen(12)).toBeTruthy()
    expect(isOpen(15)).toBeTruthy()
})
test('is close',() => {
    expect(isOpen(7)).toBeFalsy()
    expect(isOpen(16)).toBeFalsy()
})
test('in negative', () => {
    expect(inNegative([9, 27, 413, -9, 77, 650])).toBeTruthy()
    expect(inNegative([9, 27, 413, 9, 77, -650])).toBeTruthy()
    expect(inNegative([-9, 27, 413, 9, 77, 650])).toBeTruthy()
    expect(inNegative([-9, -27, -413, -9, -77, -650])).toBeTruthy()
})
test('not in negative', () => {
    expect(inNegative([9, 27, 413, 9, 77, 650])).toBeFalsy()
    expect(inNegative([])).toBeFalsy()
    expect(inNegative([9, 27, 413])).toBeFalsy()
    expect(inNegative([0, 0, 0, 0, 0, 0])).toBeFalsy()
})
test('changeVowels', () => {
    expect(changeVowels("elefánt")).toBe(".l.f.nt")
    expect(changeVowels("asztal")).toBe(".szt.l")
    expect(changeVowels("AEIOU")).toBe(".....")
    expect(changeVowels("bcdfg")).toBe("bcdfg")
    expect(changeVowels("")).toBe("")
})
test('négyzet kerülete', () => {
    expect(kerulet(5)).toBe(20);
    expect(kerulet(10)).toBe(40);
});

test('téglalap kerület', () => {
    expect(kerulet(10, 20)).toBe(60);
    expect(kerulet(5, 10)).toBe(30);
});

test('háromszög kerület', () => {
    expect(kerulet(3, 4, 5)).toBe(12);
    expect(kerulet(5, 6, 7)).toBe(18);
});

test('sokszög kerület (3 vagy több oldal)', () => {
    expect(kerulet(2, 3, 4, 5)).toBe(14);
    expect(kerulet(1, 1, 1, 1, 1, 1)).toBe(6);
    expect(kerulet(10, 20, 30, 40, 50)).toBe(150);
});