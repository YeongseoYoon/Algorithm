function solution(arr, queries) {
    const answer = [];

    queries.forEach(query => {
        const [s, e, k] = query;
        let minValue = Infinity;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minValue) {
                minValue = arr[i];
            }
        }

        if (minValue === Infinity) {
            answer.push(-1);
        } else {
            answer.push(minValue);
        }
    });

    return answer;
}