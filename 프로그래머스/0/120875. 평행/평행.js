function solution(dots) {
    function getSlope(dot1, dot2) {
        return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    }

    const combinations = [
        [[0, 1], [2, 3]],
        [[0, 2], [1, 3]],
        [[0, 3], [1, 2]]
    ];

    for (let comb of combinations) {
        const [[i, j], [k, l]] = comb;
        const slope1 = getSlope(dots[i], dots[j]);
        const slope2 = getSlope(dots[k], dots[l]);

        if (slope1 === slope2) {
            return 1; 
        }
    }

    return 0; 
}