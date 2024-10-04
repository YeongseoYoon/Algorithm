function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    
    return babbling.filter(item => {
        for (let word of words) {
            item = item.replace(word, " ");
        }
        return item.trim().length === 0;
    }).length;
}