// 나는야 포켓몬 마스터 이다솜
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`

let real = input.trim().split("\n");

function solution(real) {
    let [first, ...rest] = real;
    let [N, M] = first.split(" ").map(Number);
    let poketmons = rest.slice(0, N);
    let poketmonsMap = new Map();
    for (let i = 0; i < poketmons.length; i++) {
        let pok = poketmons[i]
        poketmonsMap.set(pok, String(i + 1));
        poketmonsMap.set(String(i + 1), pok);
    }
    // console.log(poketmonsMap)
    let muns = rest.slice(N, N + M);
    // console.log({ poketmons })
    let returns = [];
    for (let mun of muns) {
        let fI = poketmonsMap.get(mun);
        returns.push(fI);
    }
    console.log(returns.join("\n"))
}
solution(real);