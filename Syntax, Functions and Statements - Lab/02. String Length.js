function solve(arr1, arr2, arr3) {
    let sumLength = 0;
    let averageLength = 0;

    let firstArgumentLength = arr1.length;
    let secondArgumentLength = arr2.length;
    let thirdArgumentLength = arr3.length;

    sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}
solve('chocolate', 'ice cream', 'cake')