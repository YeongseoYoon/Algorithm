function solution(common) {
    const diff1 = common[1] - common[0];
    const diff2 = common[2] - common[1];

    if (diff1 === diff2) {
        return common[common.length - 1] + diff1;
    } else {
        const ratio = common[1] / common[0];
        return common[common.length - 1] * ratio;
    }
}