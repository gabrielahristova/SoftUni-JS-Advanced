function solve(input) {

    let result = '';
    let sortedArr = input.sort((a, b) => a - b);

    let first = Number(sortedArr[0]);
    let second = Number(sortedArr[1]);

    result += first + ' ' + second;

    console.log(result);
}
solve([30, 15, 50, 5])