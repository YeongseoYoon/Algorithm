function solution(sizes) {
    for (let size of sizes) {
        size.sort((w, h) => w - h);
    }
    const maxWidth = sizes.sort((w, h) => h[0] - w[0])[0][0];
    const maxHeight = sizes.sort((w, h) => h[1] - w[1])[0][1];

    return maxWidth * maxHeight;
}