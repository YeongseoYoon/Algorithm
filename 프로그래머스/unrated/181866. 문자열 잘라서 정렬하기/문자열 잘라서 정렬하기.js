function solution(myString) {
    const newArray = myString.split("x").filter((str) => str !== "").sort();
    return newArray;
}