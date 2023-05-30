function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        for(let j = 0; j < word.length; j++){
            if(babbling[i].includes(word[j].repeat(2))){
                break;
            }
            
            babbling[i] = babbling[i].split(word[j]).join(" ");

        }
                    
        if(babbling[i].split(" ").join("").length === 0){
            count += 1;
        }
    }

    return count;
}