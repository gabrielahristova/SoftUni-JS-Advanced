function solve(face, suit) {

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suites = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (!faces.includes(face) || !suites[suit]) {
        throw new Error('Error');
    }

    // if (face != face.toUpperCase()) {

    // }

    let card = {
        face,
        suit,
        toString() {
            console.log(this.face + suites[this.suit]);
        }
    }
    return card;
}
let card = solve('A', 'S')