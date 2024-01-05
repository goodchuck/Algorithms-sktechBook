var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `BruteForce 3.0 F
Greedy 1.0 F
DivideandConquer 2.0 F
DynamicProgramming 3.0 F
DepthFirstSearch 4.0 F
BreadthFirstSearch 3.0 F
ShortestPath 4.0 F
DisjointSet 2.0 F
MinimumSpanningTree 2.0 F
TopologicalSorting 1.0 F
LeastCommonAncestor 2.0 F
SegmentTree 4.0 F
EulerTourTechnique 3.0 F
StronglyConnectedComponent 2.0 F
BipartiteMatching 2.0 F
MaximumFlowProblem 3.0 F
SuffixArray 1.0 F
HeavyLightDecomposition 4.0 F
CentroidDecomposition 3.0 F
SplayTree 1.0 F
`

// let [T, ...words] = input.trim().split("\n");

function changeToScore(string) {
    let returnScore = 0;
    switch (string) {
        case 'A+':
            returnScore = 4.5;
            break;
        case 'A0':
            returnScore = 4.0;
            break;
        case 'B+':
            returnScore = 3.5;
            break;
        case 'B0':
            returnScore = 3.0;
            break;
        case 'C+':
            returnScore = 2.5;
            break;
        case 'C0':
            returnScore = 2.0;
            break;
        case 'D+':
            returnScore = 1.5;
            break;
        case 'D0':
            returnScore = 1.0;
            break;
        case 'F':
            returnScore = 0.0;
            break;
    }
    return returnScore;
}

let words = input.trim().split("\n");
function solution(words) {
    let sum = 0;
    let scores = 0;
    words.forEach((word) => {
        let [st, score, al] = word.trim().split(" ");
        if (al === 'P') {

        } else {
            score = Number(score);
            console.log({ score, al })
            sum += score;
            scores += score * changeToScore(al)
        }

    })
    if (scores === 0) {
        console.log(0)
    } else {
        console.log(scores / sum);
    }


}
solution(words);

