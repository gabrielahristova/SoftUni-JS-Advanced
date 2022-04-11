function solve(input) {

    let tows = {};

    for (const info of input) {
        let infoArr = info.split(' <-> ');
        let town = infoArr[0];
        let population = Number(infoArr[1]);

        if (!tows[town]) {
            tows[town] = 0;
        }

        tows[town] += population;
    }
    for (const town in tows) {
        console.log(`${town} : ${tows[town]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)