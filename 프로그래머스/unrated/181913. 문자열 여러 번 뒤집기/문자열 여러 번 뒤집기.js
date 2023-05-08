function solution(my_string, queries) {
    let arr = [...my_string];
    queries.forEach(([s, e]) => {
        let temp = arr.slice(s, e + 1);
        arr.splice(s, temp.length, ...temp.reverse());
    });
    return arr.join("");
}