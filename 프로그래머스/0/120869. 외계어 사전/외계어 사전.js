function solution(spell, dic) {
    const spellSet = new Set(spell);
    
    return dic.some(word => {
        const wordSet = new Set(word);
        return wordSet.size === spellSet.size && 
               spell.every(char => wordSet.has(char));
    }) ? 1 : 2;
}