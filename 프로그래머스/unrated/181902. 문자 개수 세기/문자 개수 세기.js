function solution(my_string) {
    const answer = new Array(52).fill(0);

    for(let i=0; i<my_string.length; i++){
        if(my_string.charCodeAt(i)>=65 &&my_string.charCodeAt(i)<=90){
            console.log(my_string.charCodeAt(i)-65+" "+my_string[i]);
            answer[my_string.charCodeAt(i)-65]++;
        }else{
            console.log(my_string.charCodeAt(i)-71+" "+my_string[i]);
            answer[my_string.charCodeAt(i)-71]++;
        }
    }

    return answer;
}