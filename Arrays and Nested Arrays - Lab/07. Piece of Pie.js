function solve(arr, pie1, pie2) {

    let start = arr.indexOf(pie1);
    let end = arr.indexOf(pie2);
    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(arr[i]);
    }
        return result;
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)