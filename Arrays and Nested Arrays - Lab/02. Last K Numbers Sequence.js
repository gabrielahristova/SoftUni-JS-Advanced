function solve(n ,k) {

    let result = [1];

    for(let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i-k);
        let currentEl = result.slice(startIndex, startIndex + k).reduce((acc, el) => acc + el , 0)
        result.push(currentEl);
    }
    return result;
}
solve(8, 2)